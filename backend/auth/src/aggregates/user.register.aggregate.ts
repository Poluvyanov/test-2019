import { AggregateRoot } from '@nestjs/cqrs';
import { RegisteredUserEvent } from '../events/registered-user.event';

export class UserRegisterAggregate extends AggregateRoot {
    constructor() {
        super();
    }

    public userRegister(email: string) {
        this.apply(new RegisteredUserEvent(email));
    }
}
