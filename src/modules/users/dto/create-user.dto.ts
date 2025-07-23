import { IsEmail, IsString, Length, IsOptional, IsEnum, Matches } from 'class-validator';
import { Transform } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { Role } from '../../../common/decorators/roles.decorator';

export class CreateUserDto {
    @ApiProperty({
        description: 'User email address',
        example: 'user@example.com'
    })
    @IsEmail()
    @Transform(({ value }) => value.toLowerCase().trim())
    email: string;

    @ApiProperty({
        description: 'User full name',
        example: 'John Doe',
        minLength: 2,
        maxLength: 50
    })
    @IsString()
    @Length(2, 50)
    @Transform(({ value }) => value.trim())
    name: string;

    @ApiProperty({
        description: 'User password - must contain uppercase, lowercase, number and special character',
        example: 'Password123!',
        minLength: 8,
        maxLength: 100
    })
    @IsString()
    @Length(8, 100)
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/, {
        message: 'Password must contain uppercase, lowercase, number and special character'
    })
    password: string;

    @ApiProperty({
        description: 'User role',
        enum: ['admin', 'user', 'moderator'],
        default: 'user',
        required: false
    })
    @IsOptional()
    @IsEnum(['admin', 'user', 'moderator'])
    role?: Role;
}