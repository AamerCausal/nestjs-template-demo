import { NestFactory } from '@nestjs/core';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import helmet from 'helmet';

import { AppModule } from './app.module';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { LoggingInterceptor } from './common/interceptors/logging.interceptor';

async function bootstrap() {
    const app = await NestFactory.create(AppModule, {
        logger: ['error', 'warn', 'log', 'debug', 'verbose']
    });

    const configService = app.get(ConfigService);

    // Security
    app.use(helmet());

    // CORS
    app.enableCors({
        origin: process.env.NODE_ENV === 'production' ? false : true,
        credentials: true
    });

    // Global prefix
    app.setGlobalPrefix(configService.get('config.app.prefix', 'api'));

    // API Versioning
    app.enableVersioning({
        type: VersioningType.URI,
        prefix: 'v'
    });

    // Global pipes for validation
    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true,
            forbidNonWhitelisted: true,
            transform: true,
            disableErrorMessages: process.env.NODE_ENV === 'production'
        })
    );

    // Global filters - Now enabled!
    app.useGlobalFilters(new HttpExceptionFilter());

    // Global interceptors - Now enabled!
    app.useGlobalInterceptors(new LoggingInterceptor());

    // Swagger documentation
    if (process.env.NODE_ENV !== 'production') {
        const config = new DocumentBuilder()
            .setTitle('NestJS Template API')
            .setDescription('A comprehensive NestJS template API following enterprise-level best practices')
            .setVersion('1.0')
            .addBearerAuth()
            .addTag('Auth', 'Authentication endpoints')
            .addTag('Users', 'User management endpoints')
            .addTag('Health', 'Health check endpoints')
            .build();

        const document = SwaggerModule.createDocument(app, config);
        SwaggerModule.setup('api/docs', app, document, {
            swaggerOptions: {
                persistAuthorization: true
            }
        });
    }

    const port = configService.get('config.app.port', 3000);
    await app.listen(port);

    console.log(`🚀 Application is running on: http://localhost:${port}`);
    console.log(`📚 Swagger documentation: http://localhost:${port}/api/docs`);
    console.log(`💾 Database: PostgreSQL (Docker)`);
    console.log(`🔧 pgAdmin: http://localhost:8080 (admin@nestjs.com / admin123)`);
    console.log(`📊 Database: nestjs_template@localhost:5432`);
}

bootstrap();