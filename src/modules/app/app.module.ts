import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { isTestEnvironment } from '@common/utils/environment';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { UsersModule } from '../users/users.module';
import { AuthModule } from '../auth/auth.module';
import { PingModule } from '@src/modules/ping/ping.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from '@src/guards/auth.guard';
import { CategoriesModule } from '../categories/categories.module';
import { DealsModule } from '../deals/deals.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: !isTestEnvironment() ? '.env' : '.env.test',
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/gql-generated/schema.gql'),
      sortSchema: true,
      introspection: true,
      playground: true,
    }),
    UsersModule,
    AuthModule,
    PingModule,
    DealsModule,
    CategoriesModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
