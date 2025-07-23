import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersRepository {
    constructor(
        @InjectRepository(User)
        private readonly repository: Repository<User>
    ) {}

    async create(createUserDto: CreateUserDto): Promise<User> {
        const user = this.repository.create(createUserDto);
        return this.repository.save(user);
    }

    async findAll(): Promise<User[]> {
        return this.repository.find({
            select: ['id', 'email', 'name', 'role', 'isActive', 'createdAt', 'updatedAt']
        });
    }

    async findById(id: string): Promise<User | null> {
        return this.repository.findOne({
            where: { id },
            select: ['id', 'email', 'name', 'role', 'isActive', 'createdAt', 'updatedAt']
        });
    }

    async findByEmail(email: string): Promise<User | null> {
        return this.repository.findOne({
            where: { email }
        });
    }

    async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
        await this.repository.update(id, updateUserDto);
        return this.findById(id);
    }

    async remove(id: string): Promise<void> {
        await this.repository.delete(id);
    }

    async updateLastLogin(id: string): Promise<void> {
        await this.repository.update(id, { lastLoginAt: new Date() });
    }
}