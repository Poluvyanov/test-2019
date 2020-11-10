import { Query, Args } from '@nestjs/graphql';
import { HttpStatus, Injectable } from '@nestjs/common';
import { AuthAccess, ResourceAccess, GetUser } from '@backend/common';
import { ActionType, PossessionType } from '@backend/roles';
import { UsersService } from '../services/users.service';
import { HttpException } from '@nestjs/common/exceptions/http.exception';

@Injectable()
export class UserQueries {
    constructor(private readonly userService: UsersService) {
    }

    @AuthAccess()
    @Query()
    async me(@GetUser() currentUser) {
        return currentUser;
    }

    @ResourceAccess('profile', ActionType.read, PossessionType.any)
    @Query()
    async user(@Args('id') id: number) {

        const user = await this.userService.findOneById(id);
        if (!user) {
            throw new HttpException('User not found', HttpStatus.NOT_FOUND);
        }
        return user;
    }

    @ResourceAccess('profile', ActionType.read, PossessionType.any)
    @Query()
    async users() {
        const users = await this.userService.getAll();
        if (!users || users.length < 1) {
            throw new HttpException('Users not found', HttpStatus.NOT_FOUND);
        }
        return {
            rows: users,
            count: users.length,
        };
    }
}
