import { User } from '../entities';

export class ProfileUpdateDto {
    public readonly firstName: string;
    public readonly lastName: string;
    public readonly user: User;
}
