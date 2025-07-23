import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as bcrypt from 'bcrypt';

@Injectable()
export class HashingService {
    constructor(private readonly configService: ConfigService) {}

    /**
     * Hash password using bcrypt
     */
    async hashPassword(password: string): Promise<string> {
        const saltRounds = this.configService.get<number>('config.security.bcryptRounds', 12);
        return bcrypt.hash(password, saltRounds);
    }

    /**
     * Compare password with hash
     */
    async comparePassword(password: string, hash: string): Promise<boolean> {
        return bcrypt.compare(password, hash);
    }

    /**
     * Generate random salt
     */
    async generateSalt(rounds: number = 12): Promise<string> {
        return bcrypt.genSalt(rounds);
    }
}