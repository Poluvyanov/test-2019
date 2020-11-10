import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { AuthService } from '../../services/auth.service';
import { forwardRef, Inject } from '@nestjs/common';
import { LoginUserCommand } from '../impl';

@CommandHandler(LoginUserCommand)
export class LoginUserHandler implements ICommandHandler<LoginUserCommand> {
    constructor(
        @Inject(forwardRef(() => AuthService))
        private authService: AuthService,
    ) {
    }

    async execute(command: LoginUserCommand) {
        const {email, password} = command;
        return this.authService.login(
            {
                email,
                password,
            },
        );
    }
}
