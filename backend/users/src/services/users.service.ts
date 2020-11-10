import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User, Profile } from '../entities';
import { ProfileUpdateDto, UserDto } from '../dto';
import { UserRegisterDto } from '@backend/auth/src/dto/user.register.dto';
import { UpdateProfileStatus } from '../interfaces/update-profile-status.interface';
import { Role } from '@backend/roles/src/entities';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
        @InjectRepository(Profile)
        private profileRepository: Repository<Profile>,
        @InjectRepository(Role)
        private roleRepository: Repository<Role>,
    ) {
    }

    findOneByEmail(email: string): Promise<User> {
        return this.usersRepository.findOne({
            where:
                {
                    email,
                },
            relations: ['role'],
            join: {
                alias: 'user',
                leftJoinAndSelect: {
                    profile: 'user.profile',
                },
            },
        });
    }

    async findOneById(id: number): Promise<User> {
        return this.usersRepository.findOne({
            where:
                {
                    id,
                },
            relations: ['role'],
            join: {
                alias: 'user',
                leftJoinAndSelect: {
                    profile: 'user.profile',
                },
            },
        });
    }

    async getAll(): Promise<User[]> {
        return this.usersRepository.find();
    }

    async create(userDto: UserRegisterDto): Promise<UserDto> {
        const {password, email, roleId} = userDto;

        const role = await this.roleRepository.findOne({where: {id: roleId}});

        if (!role) {
            throw new HttpException('Role does not exist', HttpStatus.BAD_REQUEST);
        }

        const userInDb = await this.usersRepository.findOne({where: {email}});
        if (userInDb) {
            throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
        }

        const user: User = await this.usersRepository.create({
            password,
            email,
            role,
        });

        await this.usersRepository.save(user);

        return {
            id: Number(user.id),
            email: user.email,
        };
    }

    async findByPayload({email}: any): Promise<UserDto> {
        return this.usersRepository.findOne({where: {email}});
    }

    async updateProfile(profileDto: ProfileUpdateDto): Promise<UpdateProfileStatus> {
        let status = {
            success: true,
            message: 'profile updated',
        };
        try {
            const {firstName, lastName, user} = profileDto;
            const profileInDb = await this.profileRepository.findOne({where: {userId: user.id}});
            if (!profileInDb) {
                const profile: Profile = await this.profileRepository.create({firstName, lastName, user});
                await this.profileRepository.save(profile);
            } else {
                profileInDb.firstName = profileDto.firstName;
                profileInDb.lastName = profileDto.lastName;
                await this.profileRepository.save(profileInDb);
            }
        } catch (e) {
            status = {
                success: false,
                message: e,
            };
        }

        return status;
    }

}
