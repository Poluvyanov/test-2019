import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UsersService } from '@backend/users/src/services/users.service';
import { AuthService } from '../../services/auth.service';
import { forwardRef, Inject } from '@nestjs/common';
import { RegisterUserCommand } from '../impl';
import { LoginUserCommand } from "../impl/LoginUserCommand";


@CommandHandler(LoginUserCommand)
export class LoginUserHandler implements ICommandHandler<LoginUserCommand> {
    constructor(
        @Inject(forwardRef(() => AuthService))
        private authService: AuthService,
        private usersService: UsersService,

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
