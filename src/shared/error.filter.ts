import { ExceptionFilter, Catch, ArgumentsHost, Logger, HttpException } from '@nestjs/common';

const ERRORS = {
  DATA_BASE_ERROR: 'DATA_BASE_ERROR',
};

@Catch()
export class ErrorFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    const errorResponse = {
      code: ERRORS.DATA_BASE_ERROR,
      timestamp: new Date().toLocaleDateString(),
      path: request.url,
      method: request.method,
      message: exception.message || 'Internal server error',
    };

    if (exception instanceof HttpException) {
      errorResponse.code = exception.getStatus() + '';
      Logger.error(`${request.method} ${request.url}`, JSON.stringify(errorResponse), 'ExceptionFilter');
    } else {
      Logger.error(`${request.method} ${request.url}`, exception.stack, 'ExceptionFilterDB');
    }

    response.json(errorResponse);
  }
}
