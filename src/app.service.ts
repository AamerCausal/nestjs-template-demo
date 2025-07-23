import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
    getApiOverview() {
        return {
            name: 'NestJS Template API',
            status: 'operational',
            version: '1.0.0',
            environment: process.env.NODE_ENV || 'development',
            documentation: '/api/docs',
            health: '/api/health',
            endpoints: {
                auth: '/api/v1/auth',
                users: '/api/v1/users',
                health: '/api/health'
            },
            features: [
                'JWT Authentication',
                'Role-based Authorization',
                'PostgreSQL Database',
                'Swagger Documentation',
                'Health Monitoring',
                'Request Validation',
                'Error Handling',
                'Logging & Monitoring'
            ]
        };
    }

    getVersion() {
        return {
            version: '1.0.0',
            name: 'nestjs-template-demo',
            description: 'A comprehensive NestJS template following enterprise-level coding standards and best practices',
            build: {
                timestamp: new Date().toISOString(),
                node_version: process.version,
                environment: process.env.NODE_ENV || 'development'
            },
            database: {
                type: 'postgresql',
                status: 'connected'
            },
            links: {
                documentation: '/api/docs',
                health: '/api/health'
            }
        };
    }
}