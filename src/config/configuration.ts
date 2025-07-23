import { registerAs } from '@nestjs/config';

export default registerAs('config', () => ({
    app: {
        port: parseInt(process.env.PORT, 10) || 3000,
        prefix: process.env.API_PREFIX || 'api',
        version: process.env.API_VERSION || 'v1'
    },
    database: {
        host: process.env.DATABASE_HOST || 'localhost',
        port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
        username: process.env.DATABASE_USERNAME || 'postgres',
        password: process.env.DATABASE_PASSWORD || 'password',
        database: process.env.DATABASE_NAME || 'nestjs_template'
    },
    jwt: {
        secret: process.env.JWT_SECRET || 'super-secret-key',
        expiresIn: process.env.JWT_EXPIRES_IN || '1h'
    },
    redis: {
        host: process.env.REDIS_HOST || 'localhost',
        port: parseInt(process.env.REDIS_PORT, 10) || 6379
    },
    security: {
        bcryptRounds: parseInt(process.env.BCRYPT_ROUNDS, 10) || 12
    },
    throttle: {
        ttl: parseInt(process.env.THROTTLE_TTL, 10) || 60,
        limit: parseInt(process.env.THROTTLE_LIMIT, 10) || 10
    }
}));