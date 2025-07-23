import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { HashingService } from '../../common/services/hashing.service';

@Injectable()
export class UsersService {
    constructor(
        private readonly usersRepository: UsersRepository,
        private readonly hashingService: HashingService
    ) {}

    async create(createUserDto: CreateUserDto): Promise<User> {
        // Check if user already exists
        const existingUser = await this.usersRepository.findByEmail(createUserDto.email);
        if (existingUser) {
            throw new ConflictException('User with this email already exists');
        }

        // Hash password
        const hashedPassword = await this.hashingService.hashPassword(createUserDto.password);

        // Create user
        const userData = {
            ...createUserDto,
            password: hashedPassword,
            role: createUserDto.role || 'user'
        };

        return this.usersRepository.create(userData);
    }

    async findAll(): Promise<User[]> {
        return this.usersRepository.findAll();
    }

    async findById(id: string): Promise<User> {
        const user = await this.usersRepository.findById(id);
        if (!user) {
            throw new NotFoundException(`User with ID ${id} not found`);
        }
        return user;
    }

    async findByEmail(email: string): Promise<User> {
        const user = await this.usersRepository.findByEmail(email);
        if (!user) {
            throw new NotFoundException(`User with email ${email} not found`);
        }
        return user;
    }

    async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
        await this.findById(id); // Check if user exists
        return this.usersRepository.update(id, updateUserDto);
    }

    async remove(id: string): Promise<void> {
        await this.findById(id); // Check if user exists
        await this.usersRepository.remove(id);
    }

    async updateLastLogin(id: string): Promise<void> {
        await this.usersRepository.updateLastLogin(id);
    }
}