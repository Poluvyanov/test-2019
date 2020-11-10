import { Injectable } from '@nestjs/common';
import { ICommand, ofType, Saga } from '@nestjs/cqrs';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { RegisteredUserEvent } from '../registered-user.event';
import { SendEmailCommand } from '../../commands/impl/SendEmailCommand';

@Injectable()
export class RegisteredUserSaga {
    @Saga()
    registered = (events$: Observable<any>): Observable<ICommand> => {
        return events$.pipe(
            ofType(RegisteredUserEvent),
            map(event => new SendEmailCommand(event.email)),
        );
    };
}
