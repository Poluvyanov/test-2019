import {
    PrimaryGeneratedColumn,
    Entity,
    Column,
    OneToOne,
    ManyToOne,
    JoinColumn,
    CreateDateColumn,
    BeforeInsert,
} from 'typeorm';
import { Profile } from './Profile';
import { Role } from '@backend/roles/src/entities';
import { hash } from 'bcryptjs';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'varchar',
        nullable: false,
        unique: true,
    }) email: string;

    @Column({
        type: 'varchar',
        nullable: false,
    }) password: string;

    @CreateDateColumn()
    createdAt?: Date;

    @CreateDateColumn()
    updatedAt?: Date;

    @OneToOne(type => Profile, profile => profile.user)
    profile: Profile;

    @ManyToOne(type => Role)
    @JoinColumn()
    role: Role;

    @BeforeInsert()
    async hashPassword() {
        this.password = await hash(this.password, 10);
    }
}
