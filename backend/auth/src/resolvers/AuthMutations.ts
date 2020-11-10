import { Args, Mutation } from '@nestjs/graphql';
import { AggregateRoot, CommandBus } from '@nestjs/cqrs';
import { Injectable } from '@nestjs/common';
import { LoginUserCommand, RegisterUserCommand } from '../commands/impl';
import { UserLoginDto, UserRegisterDto } from '../dto';

@Injectable()
export class AuthMutations {
    constructor(
        private readonly commandBus: CommandBus,
    ) {
    }

    @Mutation('login')
    async login(@Args('input') input: UserLoginDto) {
        try {
            const result = await this.commandBus.execute(
                new LoginUserCommand(
                    input.email,
                    input.password,
                ),
            );
            const {email, accessToken, expiresIn} = result;
            return {email, accessToken, expiresIn};
        } catch (e) {
            throw new Error(e);
        }
    }

    @Mutation('register')
    async register(@Args('input') input: UserRegisterDto) {
        try {
            const result = await this.commandBus.execute(
                new RegisterUserCommand(
                    input.email,
                    input.password,
                    input.roleId,
                ),
            );

            const {success, message} = result;

            return {
                success,
                message: message.response || message,
            };
        } catch (e) {
            throw new Error(e);
        }
    }
}
