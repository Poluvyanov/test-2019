import { Injectable, HttpException, HttpStatus, Inject, forwardRef } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from '../interfaces/payload.interface';
import { UsersService } from '@backend/users/src/services/users.service';
import { RegistrationStatus } from '../interfaces/regisration-status.interface';
import { UserRegisterDto, UserLoginDto } from '../dto';
import { UserDto } from '@backend/users/src/dto/user.dto';
import { LoginStatus } from '../interfaces/login-status.interface';
import { RegisteredUserEvent } from '../events/registered-user.event';
import { AggregateRoot } from '@nestjs/cqrs';

@Injectable()
export class AuthService extends AggregateRoot  {
    constructor(
        @Inject(forwardRef(() => UsersService))
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService,
    ) {
        super();
    }

    async login(loginDto: UserLoginDto): Promise<LoginStatus> {
        const user = await this.usersService.findOneByEmail(loginDto.email);
        const token = this._createToken(user);
        return {
            email: user.email,
            ...token,
        };
    }

    async register(userDto: UserRegisterDto): Promise<RegistrationStatus> {
        let status: RegistrationStatus = {
            success: true,
            message: 'user registered',
        };

        try {
            await this.usersService.create(userDto);
        } catch (err) {
            status = {
                success: false,
                message: err,
            };
        }
        this.apply(new RegisteredUserEvent(userDto.email));
        return status;
    }

    async validateUser(payload: JwtPayload): Promise<UserDto> {
        const user = await this.usersService.findByPayload(payload);
        if (!user) {
            throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
        }
        return user;
    }

    private _createToken({ email }: UserDto): any {
        const expiresIn = process.env.EXPIRESIN || '12h';
        const user: JwtPayload = { email };
        const accessToken = this.jwtService.sign(user);
        return {
            expiresIn,
            accessToken,
        };
    }
}
