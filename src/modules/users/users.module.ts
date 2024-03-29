import { Module } from '@nestjs/common';
import { UsersService } from './services/users.service';
import { UsersResolver } from './resolvers/users.resolver';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { USER_CLIENT } from '@src/constants/client-names';
import { generateCommonProtoPaths } from '@common/utils/proto-paths';
import * as path from 'path';
import { CLIENT_URLS } from '@src/constants/client-urls';

const protoFiles = [
  'user/user.proto',
  'user/service.proto',
  'common/common.proto',
];

@Module({
  imports: [
    ClientsModule.register([
      {
        name: USER_CLIENT,
        transport: Transport.GRPC,
        options: {
          // NOTE: We don't have a separate users service yet
          package: 'auth',
          protoPath: generateCommonProtoPaths(
            path.join(process.cwd(), 'protos'),
            protoFiles,
          ),
          // NOTE: We don't have a separate users service yet
          url: CLIENT_URLS.user_client,
        },
      },
    ]),
  ],
  providers: [UsersResolver, UsersService],
})
export class UsersModule {}
