import { Module } from '@nestjs/common';
import { DateUtils } from './utils/date.utils';
import { HashingService } from './services/hashing.service';
import { HttpExceptionFilter } from './filters/http-exception.filter';
import { LoggingInterceptor } from './interceptors/logging.interceptor';

@Module({
    providers: [DateUtils, HashingService, HttpExceptionFilter, LoggingInterceptor],
    exports: [DateUtils, HashingService, HttpExceptionFilter, LoggingInterceptor]
})
export class CommonModule {}