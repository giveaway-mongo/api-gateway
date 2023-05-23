import { Module } from '@nestjs/common';
import { UsersService } from './services/users.service';
import { UsersResolver } from './resolvers/users.resolver';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { USER_CLIENT } from '@src/constants/client-names';
import { generateCommonProtoPaths } from '@common/utils/proto-paths';
import * as path from 'path';

const protoFiles = ['user/user.proto', 'common/common.proto'];

@Module({
  imports: [
    ClientsModule.register([
      {
        name: USER_CLIENT,
        transport: Transport.GRPC,
        options: {
          package: 'user',
          protoPath: generateCommonProtoPaths(
            path.join(process.cwd(), 'protos'),
            protoFiles,
          ),
        },
      },
    ]),
  ],
  providers: [UsersResolver, UsersService],
})
export class UsersModule {}
