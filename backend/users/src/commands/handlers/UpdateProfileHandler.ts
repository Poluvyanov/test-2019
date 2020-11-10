import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UsersService } from '@backend/users/src/services/users.service';
import { UpdateProfileCommand } from '../impl';

@CommandHandler(UpdateProfileCommand)
export class UpdateProfileHandler implements ICommandHandler<UpdateProfileCommand> {
    constructor(
        private usersService: UsersService,
    ) {
    }

    async execute(command: UpdateProfileCommand) {
        const {firstName, lastName, user} = command;
        return this.usersService.updateProfile(
            {
                firstName,
                lastName,
                user,
            },
        );
    }
}
