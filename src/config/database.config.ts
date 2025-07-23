import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { User } from '../modules/users/entities/user.entity';

@Injectable()
export class DatabaseConfig implements TypeOrmOptionsFactory {
    constructor(private readonly configService: ConfigService) {}

    createTypeOrmOptions(): TypeOrmModuleOptions {
        return {
            type: 'postgres',
            host: this.configService.get<string>('config.database.host'),
            port: this.configService.get<number>('config.database.port'),
            username: this.configService.get<string>('config.database.username'),
            password: this.configService.get<string>('config.database.password'),
            database: this.configService.get<string>('config.database.database'),
            entities: [User],
            synchronize: process.env.NODE_ENV !== 'production',
            logging: process.env.NODE_ENV === 'development',
            ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
            autoLoadEntities: true
        };
    }
}