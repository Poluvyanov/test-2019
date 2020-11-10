import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { AuthService } from '../../services/auth.service';
import { forwardRef, Inject } from '@nestjs/common';
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
        // tslint:disable-next-line:no-console
        console.log(`run code to send email to user ${email}`);
    }
}
