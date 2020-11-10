import { IsNotEmpty, IsEmail } from 'class-validator';

export class UserRegisterDto {
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    password: string;

    @IsNotEmpty()
    roleId: number;
}
