import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';
import { protobufConfigure } from '@common/grpc/protobuf-config';

protobufConfigure();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await app.listen(3002);
}

bootstrap();
