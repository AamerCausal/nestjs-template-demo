import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import {
    HealthCheckService,
    HealthCheck,
    TypeOrmHealthIndicator,
    MemoryHealthIndicator
} from '@nestjs/terminus';

@ApiTags('Health')
@Controller('health')
export class HealthController {
    constructor(
        private readonly health: HealthCheckService,
        private readonly db: TypeOrmHealthIndicator,
        private readonly memory: MemoryHealthIndicator
    ) {}

    @Get()
    @HealthCheck()
    @ApiOperation({ summary: 'Check application health status' })
    @ApiResponse({ status: 200, description: 'Health check passed' })
    @ApiResponse({ status: 503, description: 'Health check failed' })
    check() {
        return this.health.check([
            () => this.db.pingCheck('database'),
            () => this.memory.checkHeap('memory_heap', 500 * 1024 * 1024), // 500MB
            () => this.memory.checkRSS('memory_rss', 500 * 1024 * 1024) // 500MB
            // Removed disk check for development environment
        ]);
    }
}