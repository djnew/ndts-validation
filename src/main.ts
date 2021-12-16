import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { RequestInterceptor } from './interceptor/request.interceptor';
import { MyExceptionFilter } from './filter/exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new RequestInterceptor());
  app.useGlobalFilters(new MyExceptionFilter());
  await app.listen(3000);
}
bootstrap();
