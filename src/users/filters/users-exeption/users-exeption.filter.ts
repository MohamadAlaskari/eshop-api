import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  NotFoundException,
  BadRequestException,
  HttpException,
} from '@nestjs/common';

@Catch()
export class UsersExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    let status = 500;
    let message = 'An unexpected error occurred in the Users module.';

    if (exception instanceof NotFoundException) {
      status = exception.getStatus();
      message = 'The requested user was not found.';
    } else if (exception instanceof BadRequestException) {
      status = exception.getStatus();
      message = 'Invalid data provided for the user.';
    } else if (exception instanceof HttpException) {
      status = exception.getStatus();
      message = exception.message;
    }

    response.status(status).json({
      statusCode: status,
      path: request.url,
      message,
      timestamp: new Date().toISOString(),
    });
  }
}
