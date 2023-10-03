import { Module } from '@nestjs/common';
import { DealsService } from './services/deals.service';
import { DealsResolver } from './resolvers/deals.resolver';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { DEAL_CLIENT } from '@src/constants/client-names';
import { CLIENT_URLS } from '@src/constants/client-urls';
import { generateCommonProtoPaths } from '@common/utils/proto-paths';
import * as path from 'path';

const protoFiles = ['deal/deal.proto', 'common/common.proto'];

@Module({
  imports: [
    ClientsModule.register([
      {
        name: DEAL_CLIENT,
        transport: Transport.GRPC,
        options: {
          package: 'deal',
          protoPath: generateCommonProtoPaths(
            path.join(process.cwd(), 'protos'),
            protoFiles,
          ),
          url: CLIENT_URLS.deal_client,
        },
      },
    ]),
  ],
  providers: [DealsResolver, DealsService],
})
export class DealsModule {}
