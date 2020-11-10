import { Args, Mutation } from '@nestjs/graphql';
import { ProfileUpdateDto } from '../dto';
import { Injectable } from '@nestjs/common';
import { ResourceAccess } from '@backend/common';
import { ActionType, PossessionType } from '@backend/roles';
import { AuthAccess, GetUser } from '@backend/common/src';
import { LoginUserCommand } from '@backend/auth/src/commands/impl';
import { CommandBus } from '@nestjs/cqrs';
import { UpdateProfileCommand } from '../commands/impl';

@Injectable()
export class UserMutations {
    constructor(
        private readonly commandBus: CommandBus,
    ) {
    }

    @AuthAccess()
    @ResourceAccess('profile', ActionType.update, PossessionType.own)
    @Mutation('updateProfile')
    async updateProfile(@GetUser() currentUser, @Args('input') input: ProfileUpdateDto) {
        try {
            const result = await this.commandBus.execute(
                new UpdateProfileCommand(
                    input.firstName,
                    input.lastName,
                    currentUser,
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
