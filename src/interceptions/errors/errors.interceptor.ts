import {
  BadRequestException,
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable()
export class ErrorsInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next
      .handle()
      .pipe(
        catchError((err) => {
          return throwError(
            () =>
              new BadRequestException(undefined, {
                cause: {
                  origin: err,
                  fromInterceptor: true,
                },
              }),
          );
        }),
      )
      .pipe(map((data) => ({ data, date: new Date() })));
  }
}
