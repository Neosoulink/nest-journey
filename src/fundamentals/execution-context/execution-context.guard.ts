import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';

@Injectable()
export class ExecutionContextGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const executionContextScope = this.reflector.getAllAndMerge<string[]>(
      'execution-context',
      [context.getClass(), context.getHandler()],
    );

    console.log(
      'ExecutionContextGuard > Class | Handler ==> ',
      context.getClass().name + ' | ' + context.getHandler().name,
    );
    console.log(
      'ExecutionContextGuard -> ExecutionContextScope',
      executionContextScope,
    );

    return true;
  }
}
