import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { catchError, map, Observable, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class RequestInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('Before...');

    const now = Date.now();
    return next.handle().pipe(
      tap(() => console.log(`After... ${Date.now() - now}ms`)),
      map((data) => ({
        status: 'success',
        data,
      })),
      catchError((err) => {
        return throwError(
          new HttpException(
            {
              status: 'fail',
              data: err.response,
            },
            HttpStatus.BAD_REQUEST,
          ),
        );
      }),
    );
  }
}
