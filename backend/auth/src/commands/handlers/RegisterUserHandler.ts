import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { AuthService } from '../../services/auth.service';
import { forwardRef, Inject } from '@nestjs/common';
import { RegisterUserCommand } from '../impl';
import { UserRegisterAggregate } from '../../aggregates/user.register.aggregate';

@CommandHandler(RegisterUserCommand)
export class RegisterUserHandler implements ICommandHandler<RegisterUserCommand> {
    constructor(
        @Inject(forwardRef(() => AuthService))
        private authService: AuthService,
        private readonly publisher: EventPublisher,
    ) {
    }

    async execute(command: RegisterUserCommand) {
        const {email, password, roleId} = command;
        const registerUser = await this.authService.register(
            {
                email,
                password,
                roleId,
            },
        );

        const userAggregare = this.publisher.mergeObjectContext(
            await new UserRegisterAggregate(),
        );
        userAggregare.userRegister(email);
        userAggregare.commit();
        return registerUser;
    }
}
