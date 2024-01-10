import {
  CallHandler,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
  NestInterceptor,
  RequestTimeoutException,
} from '@nestjs/common';
import {
  Observable,
  TimeoutError,
  catchError,
  throwError,
  timeout,
} from 'rxjs';

@Injectable()
export class ErrorsInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      timeout(5000),
      catchError((err) => {
        if (err instanceof TimeoutError)
          return throwError(() => new RequestTimeoutException());

        return throwError(
          () =>
            new HttpException(
              err.message ?? 'Something went wrong',
              err.status ?? HttpStatus.BAD_REQUEST,
              {
                cause: {
                  err,
                  fromInterceptor: true,
                },
              },
            ),
        );
      }),
    );
  }
}
