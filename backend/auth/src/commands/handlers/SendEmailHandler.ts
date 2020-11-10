import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UsersService } from '@backend/users/src/services/users.service';
import { AuthService } from '../../services/auth.service';
import { forwardRef, Inject } from '@nestjs/common';
import { LoginUserCommand, RegisterUserCommand } from '../impl';
import { SendEmailCommand } from '../impl/SendEmailCommand';



@CommandHandler(SendEmailCommand)
export class SendEmailHandler implements ICommandHandler<LoginUserCommand> {
    constructor(
        @Inject(forwardRef(() => AuthService))
        private authService: AuthService,
        private usersService: UsersService,

    ) {
    }

    async execute(command: SendEmailCommand) {
        const {email} = command;
        console.log('In this handler we SEND EMAIL');
    }
}
