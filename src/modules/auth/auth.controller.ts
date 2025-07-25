import { Controller, Post, Body, Get, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { AuthService } from './auth.service';

@ApiTags('Auth')
@Controller({ path: 'auth', version: '1' })
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('login')
    @ApiOperation({ summary: 'User login' })
    @ApiResponse({ status: 200, description: 'Login successful' })
    @ApiResponse({ status: 401, description: 'Invalid credentials' })
    async login(@Body() loginDto: any) {
        return { message: 'Login endpoint - Implementation pending' };
    }

    @Post('register')
    @ApiOperation({ summary: 'User registration' })
    @ApiResponse({ status: 201, description: 'User registered successfully' })
    @ApiResponse({ status: 400, description: 'Registration failed' })
    async register(@Body() registerDto: any) {
        return { message: 'Register endpoint - Implementation pending' };
    }

    @Get('profile')
    @ApiBearerAuth()
    @ApiOperation({ summary: 'Get user profile' })
    @ApiResponse({ status: 200, description: 'Profile retrieved successfully' })
    async getProfile() {
        return { message: 'Profile endpoint - Implementation pending' };
    }
}