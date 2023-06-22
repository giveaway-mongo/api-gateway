import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';
import { protobufConfigure } from '@common/grpc/protobuf-config';
import { ValidationPipe } from '@nestjs/common';
import {
  RpcExceptionFilter,
  ServerExceptionFilter,
} from '@common/utils/rpc-exception.filter';
import { getRabbitMQOptions } from '@common/rabbitMQ/rabbitMQ-options';

protobufConfigure();

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { snapshot: true });

  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.useGlobalFilters(new ServerExceptionFilter());
  app.useGlobalFilters(new RpcExceptionFilter());

  app.connectMicroservice(getRabbitMQOptions('new_queue'));

  await app.startAllMicroservices();
  await app.listen(8080);
}

bootstrap();
