import { join } from 'path';
import { generateCommonProtoPaths } from '@common/utils/proto-paths';

const paths = ['common/common.proto', 'user/user.proto'];

export const protoPath = generateCommonProtoPaths(
  join(process.cwd(), 'protos'),
  paths,
);
