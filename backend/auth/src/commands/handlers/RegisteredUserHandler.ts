import { CommandHandler, EventsHandler, ICommandHandler, IEventHandler } from '@nestjs/cqrs';
import { UsersService } from '@backend/users/src/services/users.service';
import { AuthService } from '../../services/auth.service';
import { forwardRef, Inject } from '@nestjs/common';
import { RegisterUserCommand } from '../impl';
import { RegisteredUserEvent } from '../../events/registered-user.event';


@EventsHandler(RegisteredUserEvent)
export class RegisteredUserHandler implements IEventHandler<RegisteredUserEvent> {
    constructor(
        @Inject(forwardRef(() => AuthService))
        private authService: AuthService,
    ) {

    }

    async handle(event: RegisteredUserEvent) {
        const {email} = event;
        console.log(`run code to send email to user ${email}`);
    }
}
