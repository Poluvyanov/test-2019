import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { AuthService } from '../../services/auth.service';
import { forwardRef, Inject } from '@nestjs/common';
import { LoginUserCommand } from '../impl';
import { SendEmailCommand } from '../impl/SendEmailCommand';

@CommandHandler(SendEmailCommand)
export class SendEmailHandler implements ICommandHandler<LoginUserCommand> {
    constructor(
        @Inject(forwardRef(() => AuthService))
        private authService: AuthService,
    ) {
    }

    async execute(command: SendEmailCommand) {
        const {email} = command;
        // tslint:disable-next-line:no-console
        console.log(`In this handler we SEND EMAIL ${email}`);
    }
}
