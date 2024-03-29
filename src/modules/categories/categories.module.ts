import { Module } from '@nestjs/common';
import { CategoriesResolver } from './resolvers/categories.resolver';
import { CategoriesService } from './services/categories.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { CATEGORY_CLIENT } from '@src/constants/client-names';
import { CLIENT_URLS } from '@src/constants/client-urls';
import { generateCommonProtoPaths } from '@common/utils/proto-paths';
import * as path from 'path';

const protoFiles = [
  'category/category.proto',
  'category/service.proto',
  'common/common.proto',
];

@Module({
  imports: [
    ClientsModule.register([
      {
        name: CATEGORY_CLIENT,
        transport: Transport.GRPC,
        options: {
          package: 'category',
          protoPath: generateCommonProtoPaths(
            path.join(process.cwd(), 'protos'),
            protoFiles,
          ),
          url: CLIENT_URLS.category_client,
        },
      },
    ]),
  ],
  providers: [CategoriesResolver, CategoriesService],
})
export class CategoriesModule {}
