import { HttpException } from '@nestjs/common/exceptions/http.exception';
import { NestMiddleware, HttpStatus, Injectable } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import { UsersService } from '@backend/users/src/services/users.service';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
    constructor(private readonly userService: UsersService) {
    }

    async use(req: Request, res: Response, next: NextFunction) {
        const authHeaders = req.headers.authorization;
        if (authHeaders && (authHeaders as string).split(' ')[1]) {
            const token = (authHeaders as string).split(' ')[1];
            let decoded: any = null;
            try {
                decoded = jwt.verify(token, 'DEV_KEY');
            } catch (e) {
                throw new HttpException('Token expired', HttpStatus.UNAUTHORIZED);
            }
            const user = await this.userService.findOneByEmail(decoded.email);
            if (user) {
                // tslint:disable-next-line
                req['user'] = user;
            }

        }
        next();
    }
}
