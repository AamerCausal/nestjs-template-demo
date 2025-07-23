import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CacheModule } from '@nestjs/cache-manager';
import { ThrottlerModule } from '@nestjs/throttler';
import { TerminusModule } from '@nestjs/terminus';

// import { AppController } from './app.controller'; // Removed - no root endpoints needed
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { HealthModule } from './modules/health/health.module';
import { CommonModule } from './common/common.module';
import { ConfigurationModule } from './config/configuration.module';
import configuration from './config/configuration';
import { DatabaseConfig } from './config/database.config';

@Module({
    imports: [
        // Configuration module - Global
        ConfigModule.forRoot({
            load: [configuration],
            isGlobal: true,
            cache: true,
            expandVariables: true
        }),

        // Database configuration - Now using PostgreSQL
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            useClass: DatabaseConfig
        }),

        // Cache module - Global
        CacheModule.register({
            isGlobal: true,
            ttl: 300 // 5 minutes default TTL
        }),

        // Throttling/Rate limiting
        ThrottlerModule.forRoot([
            {
                ttl: 60000, // 1 minute
                limit: 10 // 10 requests per minute
            }
        ]),

        // Health checks
        TerminusModule,

        // Application modules - NOW ENABLED! 🚀
        CommonModule,
        ConfigurationModule,
        AuthModule,
        UsersModule,
        HealthModule
    ],
    // controllers: [AppController], // Removed - focusing on business logic only
    providers: [AppService]
})
export class AppModule {}