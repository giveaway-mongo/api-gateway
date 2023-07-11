import { SetMetadata } from '@nestjs/common';
import { ROLES } from '@common/constants/roles';

export const ROLE_KEY = 'role';

export const PublicRole = () => SetMetadata(ROLE_KEY, undefined);
export const UserRole = () => SetMetadata(ROLE_KEY, ROLES.USER);
export const AdminRole = () => SetMetadata(ROLE_KEY, ROLES.ADMIN);
