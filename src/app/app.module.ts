import { Module } from '@nestjs/common';
import { SamplesModule } from '../samples/samples.module';
import { ConfigModule } from '@nestjs/config';
import { isTestEnvironment } from '@common/utils/environment';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: !isTestEnvironment() ? '.env' : '.env.test',
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
    }),
    SamplesModule,
  ],
})
export class AppModule {}
