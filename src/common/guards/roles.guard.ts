import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY, Role } from '../decorators/roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private reflector: Reflector) {}

    canActivate(context: ExecutionContext): boolean {
        const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
            context.getHandler(),
            context.getClass()
        ]);

        if (!requiredRoles) {
            return true;
        }

        const { user } = context.switchToHttp().getRequest();

        // Handle case where user is not authenticated
        if (!user) {
            return false; // Return false instead of throwing error
        }

        // Handle case where user exists but doesn't have roles property
        if (!user.roles) {
            return false;
        }

        return requiredRoles.some((role) => user.roles?.includes(role));
    }
}