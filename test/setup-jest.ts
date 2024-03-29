import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '@src/modules/app/app.module';
import { isTestEnvironment } from '@common/utils/environment';
import {
  RpcExceptionFilter,
  ServerExceptionFilter,
} from '@common/utils/rpc-exception.filter';
import { getRabbitMQOptions } from '@common/rabbitMQ/rabbitMQ-options';
import redisCache from '@common/redis/cache';

let app: INestApplication;
let testingModule: TestingModule;

jest.setTimeout(15000);

global.beforeAll(async () => {
  if (!isTestEnvironment()) {
    throw Error('Not testing environment!');
  }

  testingModule = await Test.createTestingModule({
    imports: [AppModule],
  }).compile();

  app = await testingModule
    .createNestApplication()
    .useGlobalPipes(new ValidationPipe({ transform: true }))
    .useGlobalFilters(new ServerExceptionFilter())
    .useGlobalFilters(new RpcExceptionFilter());

  app.connectMicroservice(getRabbitMQOptions('new_queue'), {
    inheritAppConfig: true,
  });

  await app.startAllMicroservices();
  await app.init();
  await app.listen(3001);
  await redisCache.connect();

  (global as any).app = app;
  (global as any).testingModule = testingModule;
});

afterAll(async () => {
  await app.close();
});
