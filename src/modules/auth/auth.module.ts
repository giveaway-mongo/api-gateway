import { Module } from '@nestjs/common';
import { AuthService } from './services/auth.service';
import { AuthResolver } from './resolvers/auth.resolver';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AUTH_CLIENT } from '@src/constants/client-names';
import { generateCommonProtoPaths } from '@common/utils/proto-paths';
import * as path from 'path';

const protoFiles = [
  'auth/auth.proto',
  'auth/service.proto',
  'common/common.proto',
];

@Module({
  imports: [
    ClientsModule.register([
      {
        name: AUTH_CLIENT,
        transport: Transport.GRPC,
        options: {
          package: 'auth',
          protoPath: generateCommonProtoPaths(
            path.join(process.cwd(), 'protos'),
            protoFiles,
          ),
          url: 'dns://auth-service:50051',
        },
      },
    ]),
  ],
  providers: [AuthResolver, AuthService],
})
export class AuthModule {}
