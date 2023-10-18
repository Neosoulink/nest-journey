import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Request } from 'express';
import { Observable } from 'rxjs';

// DECORATORS
import { InfosPerms } from './infos.decorator';

@Injectable()
export class InfosGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const roles = this.reflector.get(InfosPerms, context.getHandler());

    if (!roles?.length) {
      return true;
    }

    const request = context.switchToHttp().getRequest<Request>();

    return this.matchRoles(request, roles);
  }

  matchRoles(request: Request, roles: string[]) {
    return request.body?.user?.role && roles.includes(request.body.user.role);
  }
}
