import { join } from 'path';
import { generateCommonProtoPaths } from '@common/utils/proto-paths';

const paths = [
  'common/common.proto',
  'auth/auth.proto',
  'auth/service.proto',
  'user/user.proto',
  'user/service.proto',
];

export const protoPath = generateCommonProtoPaths(
  join(process.cwd(), 'protos'),
  paths,
);
