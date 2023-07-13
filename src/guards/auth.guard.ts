import redisCache from '@common/redis/cache';
import { RpcException } from '@nestjs/microservices';
import { getErrors } from '@common/utils/error';
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES } from '@common/constants/roles';
import { GqlExecutionContext } from '@nestjs/graphql';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const role = this.reflector.get<string>('role', context.getHandler());
    console.log(role);

    if (!role) {
      return true;
    }

    const ctx = GqlExecutionContext.create(context);
    const request = ctx.getContext().req;
    const authToken = request.headers.auth;
    const keys = await redisCache.getAuthKeys(authToken);

    if (!keys.length) {
      throw new RpcException(
        getErrors({
          nonFieldErrors: ['Unauthorized. No token'],
          errorCode: 401,
        }),
      );
    }

    const user = await redisCache.getAuth(keys[0]);

    if (!user) {
      throw new RpcException(
        getErrors({
          nonFieldErrors: ['Unauthorized. No user'],
          errorCode: 401,
        }),
      );
    }

    request.user = user;

    const hasAccess = matchRoles(role, user.role);

    if (!hasAccess) {
      throw new RpcException(
        getErrors({ nonFieldErrors: ['Has no access'], errorCode: 403 }),
      );
    }

    return true;
  }
}

const matchRoles = (accessRole: string, userRole: string) => {
  console.log('accessRole', accessRole, 'userRole', userRole);
  return !accessRole || userRole === ROLES.ADMIN || accessRole === userRole;
};
