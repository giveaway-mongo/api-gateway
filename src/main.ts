import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';
import { MicroserviceOptions } from '@nestjs/microservices';
import { getGrpcOptions } from '@common/grpc/grpc-options';
import { protobufConfigure } from '@common/grpc/protobuf-config';
import { protoPath } from './constants/proto-path';

protobufConfigure();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.connectMicroservice<MicroserviceOptions>(
    getGrpcOptions('sample', protoPath),
  );

  await app.startAllMicroservices();
  await app.listen(3001);
}

bootstrap();
