"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const entities_1 = require("../entities");
const entities_2 = require("@backend/roles/src/entities");
let UsersService = class UsersService {
    constructor(usersRepository, profileRepository, roleRepository) {
        this.usersRepository = usersRepository;
        this.profileRepository = profileRepository;
        this.roleRepository = roleRepository;
    }
    findOneByEmail(email) {
        return this.usersRepository.findOne({
            where: {
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
    findOneById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.usersRepository.findOne({
                where: {
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
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.usersRepository.find();
        });
    }
    create(userDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const { password, email, roleId } = userDto;
            const role = yield this.roleRepository.findOne({ where: { id: roleId } });
            if (!role) {
                throw new common_1.HttpException('Role does not exist', common_1.HttpStatus.BAD_REQUEST);
            }
            const userInDb = yield this.usersRepository.findOne({ where: { email } });
            if (userInDb) {
                throw new common_1.HttpException('User already exists', common_1.HttpStatus.BAD_REQUEST);
            }
            const user = yield this.usersRepository.create({
                password,
                email,
                role,
            });
            yield this.usersRepository.save(user);
            return {
                id: Number(user.id),
                email: user.email,
            };
        });
    }
    findByPayload({ email }) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.usersRepository.findOne({ where: { email } });
        });
    }
    updateProfile(profileDto) {
        return __awaiter(this, void 0, void 0, function* () {
            let status = {
                success: true,
                message: 'profile updated',
            };
            try {
                const { firstName, lastName, user } = profileDto;
                const profileInDb = yield this.profileRepository.findOne({ where: { userId: user.id } });
                if (!profileInDb) {
                    const profile = yield this.profileRepository.create({ firstName, lastName, user });
                    yield this.profileRepository.save(profile);
                }
                else {
                    profileInDb.firstName = profileDto.firstName;
                    profileInDb.lastName = profileDto.lastName;
                    yield this.profileRepository.save(profileInDb);
                }
            }
            catch (e) {
                status = {
                    success: false,
                    message: e,
                };
            }
            return status;
        });
    }
};
UsersService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(entities_1.User)),
    __param(1, typeorm_1.InjectRepository(entities_1.Profile)),
    __param(2, typeorm_1.InjectRepository(entities_2.Role)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], UsersService);
exports.UsersService = UsersService;
