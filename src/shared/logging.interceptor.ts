import { Injectable, NestInterceptor, ExecutionContext, Logger, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, call: CallHandler): Observable<any> {
    const now = Date.now();
    const req = context.switchToHttp().getRequest();

    if (req) {
      const method = req.method;
      const url = req.url;

      Logger.log(`${method} ${url} ${Date.now() - now}ms`, context.getClass().name);
    } else {
      const ctx: any = context;
      const resolverName = ctx.constructorRef.name;
      const info = ctx.getInfo();

      Logger.log(`${info.parentType} "${info.fieldName}" ${Date.now() - now}ms`, resolverName);
    }

    return call.handle();
  }
}
