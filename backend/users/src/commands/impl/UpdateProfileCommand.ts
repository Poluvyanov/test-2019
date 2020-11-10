import { User } from '../../entities';

export class UpdateProfileCommand {
    constructor(
        public readonly firstName: string,
        public readonly lastName: string,
        public readonly user: User,
    ) {
    }
}
