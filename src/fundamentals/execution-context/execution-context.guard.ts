import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class ExecutionContextGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    console.log(
      'ExecutionContextGuard > Class | Handler ==> ',
      context.getClass().name + ' | ' + context.getHandler().name,
    );

    return true;
  }
}
