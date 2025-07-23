# NestJS Template Demo - Enterprise Ready

A comprehensive NestJS template following enterprise-level coding standards and best practices, implementing SOLID, DRY, and KISS principles with a **streamlined, security-focused API design**.

## 🚀 Features

-------- Added this --------

### Enterprise-Level Architecture

- **SOLID Principles Implementation** - Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion
- **Clean Architecture** - Proper separation of concerns with modules, services, repositories, and controllers
- **Repository Pattern** - Database abstraction layer for better testability and maintainability
- **Dependency Injection** - Leveraging NestJS DI container for loose coupling
- **Streamlined API Design** - Business-focused endpoints only, no unnecessary root endpoints

---

-------- Added this --------

### Security Features

- **JWT Authentication** - Token-based authentication with configurable expiration
- **Role-Based Authorization** - Custom decorators and guards for role management
- **Input Validation** - Comprehensive validation using class-validator and DTOs
- **Password Hashing** - Secure password hashing with bcrypt
- **Helmet Integration** - Security headers for HTTP requests
- **CORS Configuration** - Configurable cross-origin resource sharing
- **Minimal Attack Surface** - Only essential endpoints exposed

---

-------- Added this --------

### Performance & Monitoring

- **Caching System** - Built-in caching with configurable TTL
- **Health Checks** - Database, memory, and disk health monitoring
- **Request Throttling** - Rate limiting to prevent abuse
- **Logging & Interceptors** - Comprehensive request/response logging
- **Error Handling** - Global exception filters with structured error responses

---

-------- Added this --------

### Developer Experience

- **API Documentation** - Auto-generated Swagger/OpenAPI documentation
- **TypeScript Best Practices** - Strong typing with interfaces and custom types
- **Code Quality Tools** - ESLint, Prettier configuration
- **Testing Setup** - Jest configuration for unit and e2e tests
- **Environment Configuration** - Type-safe configuration management
- **Database Migrations** - TypeORM migration setup

---

## 📁 Project Structure

-------- Added this --------

```
src/
├── main.ts                          # Application entry point with security setup
├── app.module.ts                    # Main application module
├── app.controller.ts                # Empty - focuses on business endpoints only
├── app.service.ts                   # Application service utilities
├── common/                          # Shared utilities and components
│   ├── decorators/
│   │   └── roles.decorator.ts       # Role-based authorization decorator
│   ├── filters/
│   │   └── http-exception.filter.ts # Global exception filter
│   ├── guards/
│   │   └── roles.guard.ts          # Role authorization guard
│   ├── interceptors/
│   │   └── logging.interceptor.ts  # Request/response logging
│   ├── services/
│   │   └── hashing.service.ts      # Password hashing service
│   ├── utils/
│   │   └── date.utils.ts           # Date utility functions
│   └── common.module.ts            # Common module
├── config/                         # Configuration management
│   ├── configuration.ts            # Environment configuration
│   ├── database.config.ts          # Database configuration
│   └── configuration.module.ts     # Configuration module
├── modules/                        # Feature modules
│   ├── auth/                       # Authentication module
│   │   └── auth.module.ts          # Auth module setup
│   ├── users/                      # User management module
│   │   ├── dto/                    # Data Transfer Objects
│   │   │   ├── create-user.dto.ts  # User creation DTO
│   │   │   └── update-user.dto.ts  # User update DTO
│   │   ├── entities/
│   │   │   └── user.entity.ts      # User database entity
│   │   ├── users.controller.ts     # RESTful user endpoints
│   │   ├── users.service.ts        # User business logic
│   │   ├── users.repository.ts     # User data access layer
│   │   └── users.module.ts         # User module
│   └── health/                     # Health monitoring module
│       ├── health.controller.ts    # Health check endpoints
│       └── health.module.ts        # Health module
└── types/                          # TypeScript declaration files
```

---

## 🛠️ Installation & Setup

-------- Added this --------

### Prerequisites

- Node.js (v18 or higher)
- PostgreSQL (v14 or higher) - via Docker
- Docker & Docker Compose (recommended)

### Quick Start with Docker

1. Clone and setup:

```bash
# Clone repository
git clone <repository-url>
cd nestjs-template-demo

# Copy environment variables
cp env.example .env

# Start PostgreSQL with Docker Compose
docker-compose up -d

# Install dependencies
npm install

# Start development server
npm run start:dev
```

2. Your API will be available at:

- **API Base**: `http://localhost:3000/api`
- **Documentation**: `http://localhost:3000/api/docs`
- **Health Check**: `http://localhost:3000/api/health`
- **pgAdmin**: `http://localhost:8080` (admin@nestjs.com / admin123)

---

## 🎯 API Documentation

-------- Added this --------

### Swagger Documentation

Once the application is running, visit:

- **API Documentation**: `http://localhost:3000/api/docs`
- **Health Check**: `http://localhost:3000/api/health`

### 🎯 **Available Endpoints (Streamlined Enterprise Design)**

This template follows enterprise best practices by exposing **only essential business endpoints**:

#### 🔐 Authentication Endpoints

- `POST /api/v1/auth/login` - User login
- `POST /api/v1/auth/register` - User registration
- `GET /api/v1/auth/profile` - Get user profile (Protected)

#### 👥 User Management Endpoints

- `GET /api/v1/users` - Get all users (Admin only)
- `GET /api/v1/users/:id` - Get user by ID (Protected)
- `POST /api/v1/users` - Create new user (Admin only)
- `PUT /api/v1/users/:id` - Update user (Admin only)
- `DELETE /api/v1/users/:id` - Delete user (Admin only)

#### 🏥 Health & Monitoring

- `GET /api/health` - Application health status (Database, Memory)

### 🚫 **Removed Endpoints (Security Enhancement)**

Following enterprise security patterns, we've **removed generic root endpoints**:

- ❌ `GET /api` - Removed (no business value, potential security risk)
- ❌ `GET /api/version` - Removed (information disclosure)

**Why removed?** Major enterprise APIs (Stripe, GitHub, AWS) don't expose generic root endpoints. This follows the **principle of least exposure** and **minimal attack surface**.

---

## 🧪 Testing

-------- Added this --------

### Running Tests

```bash
# Unit tests
npm run test

# E2E tests
npm run test:e2e

# Test coverage
npm run test:cov

# Watch mode
npm run test:watch
```

### Test Structure

- **Unit Tests**: Located alongside source files (`*.spec.ts`)
- **E2E Tests**: Located in `/test` directory
- **Coverage Reports**: Generated in `/coverage` directory

---

## 🔧 Development Tools

-------- Added this --------

### Code Quality

```bash
# Lint code
npm run lint

# Fix linting issues
npm run lint:fix

# Format code
npm run format
```

### Database Management

```bash
# View database with pgAdmin
open http://localhost:8080
# Login: admin@nestjs.com / admin123

# Stop database containers
docker-compose down

# Remove volumes (fresh start)
docker-compose down -v
```

---

## 🏗️ Architecture & Design Patterns

-------- Added this --------

### SOLID Principles Implementation

#### Single Responsibility Principle (SRP)

- Each service handles only one business domain
- Controllers only handle HTTP requests
- Repositories only handle data access
- Utilities have single, focused purposes

#### Open/Closed Principle (OCP)

- Strategy pattern for notifications and services
- Extensible configuration without modification
- Plugin-based architecture for middlewares

#### Liskov Substitution Principle (LSP)

- Proper inheritance hierarchies
- Interface-based contracts
- Substitutable implementations

#### Interface Segregation Principle (ISP)

- Small, focused interfaces
- Role-specific method groupings
- No forced dependencies on unused methods

#### Dependency Inversion Principle (DIP)

- Dependency injection throughout
- Abstract interfaces over concrete implementations
- Configurable service dependencies

### DRY (Don't Repeat Yourself)

- Reusable utility classes (`DateUtils`, `HashingService`)
- Base service classes with common functionality
- Shared decorators and guards
- Common configuration management

### KISS (Keep It Simple, Stupid)

- Clear, readable code structure
- Simple method signatures
- Obvious naming conventions
- Minimal complexity in business logic
- **Streamlined API** - Only essential endpoints exposed

---

## 📊 Performance Features

-------- Added this --------

### Caching Strategy

- **Memory Caching**: Built-in cache manager
- **TTL Configuration**: Configurable time-to-live
- **Cache Keys**: Structured cache key patterns
- **Cache Invalidation**: Manual and automatic invalidation

### Database Optimization

- **Connection Pooling**: PostgreSQL connection pooling
- **Query Optimization**: Selective field loading
- **Indexing**: Strategic database indexes
- **Migrations**: Version-controlled schema changes

### Monitoring & Health Checks

- **Database Health**: Connection and query monitoring
- **Memory Usage**: Heap and RSS monitoring
- **Custom Health Indicators**: Extensible health checks

---

## 🔐 Security Features

-------- Added this --------

### Authentication & Authorization

- **JWT Tokens**: Stateless authentication
- **Role-Based Access**: Fine-grained permissions
- **Password Security**: Bcrypt hashing with configurable rounds
- **Input Validation**: Comprehensive DTO validation

### HTTP Security

- **Helmet**: Security headers
- **CORS**: Configurable cross-origin policies
- **Rate Limiting**: Throttling to prevent abuse
- **Input Sanitization**: XSS and injection prevention

### Data Protection

- **Password Exclusion**: Automatic password field exclusion
- **Sensitive Data**: Proper handling of sensitive information
- **Environment Variables**: Secure configuration management
- **Minimal Exposure**: Only business-critical endpoints exposed

### 🎯 **Enterprise Security Approach**

**Principle of Least Exposure**: Following patterns from:

- **GitHub API**: Direct to `/user`, `/repos` (no root endpoint)
- **Stripe API**: Direct to `/v1/charges`, `/v1/customers`
- **AWS API**: Direct to service endpoints
- **Banking APIs**: Direct to business functions only

**Benefits:**

- ✅ Reduced attack surface
- ✅ No information disclosure
- ✅ Professional API design
- ✅ Focused on business value

---

## 📈 Scalability Features

-------- Added this --------

### Horizontal Scaling

- **Stateless Design**: No server-side session storage
- **Database Separation**: Dedicated database layer
- **Microservice Ready**: Modular architecture
- **Load Balancer Compatible**: Session-less design

### Vertical Scaling

- **Memory Management**: Efficient memory usage
- **Connection Pooling**: Database connection optimization
- **Caching**: Reduced database load
- **Async Operations**: Non-blocking I/O operations

---

## 🚦 Error Handling

-------- Added this --------

### Global Exception Handling

- **HTTP Exception Filter**: Centralized error processing
- **Structured Error Responses**: Consistent error format
- **Error Logging**: Comprehensive error tracking
- **Development vs Production**: Environment-specific error details

### Validation Errors

- **DTO Validation**: Automatic request validation
- **Custom Validators**: Business-specific validation
- **Error Messages**: Clear, actionable error messages
- **Field-Level Errors**: Detailed validation feedback

---

## 📝 Configuration Management

-------- Added this --------

### Environment-Based Configuration

- **Type-Safe Config**: Strongly typed configuration
- **Validation**: Configuration validation with Joi
- **Default Values**: Sensible configuration defaults
- **Environment Separation**: Dev/staging/production configs

### Configuration Structure

```typescript
{
  app: { port, prefix, version },
  database: { host, port, username, password, database },
  jwt: { secret, expiresIn },
  redis: { host, port },
  security: { bcryptRounds },
  throttle: { ttl, limit }
}
```

---

## 💾 Database Configuration

-------- Added this --------

### Current Setup: SQLite In-Memory (Development)

The template currently uses **SQLite in-memory database** for quick development without external dependencies.

**Advantages:**

- ✅ No setup required
- ✅ Fast development startup
- ✅ Perfect for testing and prototyping
- ✅ No external dependencies

**Current Configuration:**

```typescript
// src/config/database.config.ts
return {
    type: 'sqlite',
    database: ':memory:',
    entities: [User],
    synchronize: true,
    autoLoadEntities: true
};
```

### 🔄 Switching to PostgreSQL (Production)

When ready for production or persistent data, follow these steps:

#### 1. Install PostgreSQL Dependencies

```bash
npm install pg @types/pg
```

#### 2. Set up PostgreSQL Database

```bash
# Using Docker (Recommended)
docker run --name nestjs-postgres \
  -e POSTGRES_PASSWORD=password \
  -e POSTGRES_USER=nestjs \
  -e POSTGRES_DB=nestjs_template \
  -p 5432:5432 \
  -d postgres:14

# Or install PostgreSQL locally
brew install postgresql
brew services start postgresql
createdb nestjs_template
```

#### 3. Update Environment Variables

```env
# .env file
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USERNAME=nestjs
DATABASE_PASSWORD=password
DATABASE_NAME=nestjs_template
```

#### 4. Update Database Configuration

```typescript
// src/config/database.config.ts
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
```

#### 5. Update User Entity for PostgreSQL

```typescript
// src/modules/users/entities/user.entity.ts
@Column({
  type: 'enum',
  enum: ['admin', 'user', 'moderator'],
  default: 'user'
})
role: Role;
```

#### 6. Add Migration Support (Optional)

```bash
# Add to package.json scripts
"migration:generate": "typeorm-ts-node-commonjs migration:generate",
"migration:run": "typeorm-ts-node-commonjs migration:run",
"migration:revert": "typeorm-ts-node-commonjs migration:revert"

# Generate and run migrations
npm run migration:generate -- -n CreateUsers
npm run migration:run
```

### 🗄️ Other Database Options

#### MySQL/MariaDB

```bash
npm install mysql2 @types/mysql
# Update type to 'mysql' in database.config.ts
```

#### MongoDB

```bash
npm install @nestjs/mongoose mongoose
# Replace TypeORM with Mongoose setup
```

### 🚀 Quick Database Switching

To quickly switch between databases, you can use environment-based configuration:

```typescript
// src/config/database.config.ts
createTypeOrmOptions(): TypeOrmModuleOptions {
  const dbType = process.env.DATABASE_TYPE || 'sqlite';

  if (dbType === 'sqlite') {
    return {
      type: 'sqlite',
      database: ':memory:',
      entities: [User],
      synchronize: true,
      autoLoadEntities: true
    };
  }

  return {
    type: 'postgres',
    host: this.configService.get<string>('config.database.host'),
    // ... PostgreSQL config
  };
}
```

## Then set `DATABASE_TYPE=postgres` in your `.env` file when ready to switch!

## 🔄 CI/CD Ready

-------- Added this --------

### Containerization

- **Dockerfile**: Production-ready container setup
- **Docker Compose**: Local development environment
- **Multi-stage Builds**: Optimized image sizes

### GitHub Actions

- **Automated Testing**: Test pipeline on commits
- **Code Quality**: Linting and formatting checks
- **Security Scanning**: Dependency vulnerability checks
- **Deployment**: Automated deployment workflows

---

## 📚 Best Practices Implemented

-------- Added this --------

### Code Organization

- **Feature Modules**: Domain-driven module structure
- **Barrel Exports**: Clean import statements
- **Index Files**: Simplified module exports
- **Type Definitions**: Comprehensive TypeScript usage

### Database Best Practices

- **Entities**: Well-defined database entities
- **Migrations**: Version-controlled schema changes
- **Relationships**: Proper entity relationships
- **Transactions**: Data consistency handling

### API Design

- **RESTful Endpoints**: Standard HTTP methods
- **API Versioning**: URI-based versioning
- **Response Consistency**: Uniform response format
- **Documentation**: Complete API documentation

---

## 🤝 Contributing

-------- Added this --------

### Development Workflow

1. Fork the repository
2. Create a feature branch
3. Follow coding standards
4. Write tests for new features
5. Submit a pull request

### Code Review Checklist

- [ ] SOLID principles followed
- [ ] Tests written and passing
- [ ] Documentation updated
- [ ] No security vulnerabilities
- [ ] Performance considerations
- [ ] Error handling implemented

---

## 📋 TODO & Roadmap

-------- Added this --------

### Upcoming Features

- [ ] Email service integration
- [ ] File upload handling
- [ ] Audit logging system
- [ ] Real-time notifications
- [ ] API rate limiting per user
- [ ] Advanced caching strategies
- [ ] Monitoring dashboard
- [ ] Performance metrics

---

## 📄 License

-------- Added this --------
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **NestJS Team** - For the amazing framework
- **Community Contributors** - For coding standards inspiration
- **Enterprise Patterns** - Based on industry best practices

---

---

**Built with ❤️ following enterprise-level coding standards and best practices**
