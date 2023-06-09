import { Inject, Injectable } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { AUTH_CLIENT } from '@src/constants/client-names';
import { AuthService as AuthProtoService } from '@protogen/auth/service';
import { SignInRequest, SignInResponse } from '@protogen/auth/auth';

const promisify = <T extends object>(service: T) => {
  return new Proxy(service, {
    get: (service: any, methodName: string) => {
      return async (...params) => {
        return await service[methodName](...params).toPromise();
      };
    },
  });
};

@Injectable()
export class AuthService {
  constructor(@Inject(AUTH_CLIENT) private client: ClientGrpc) {}
  private authService: AuthProtoService;

  async signIn(signInRequest: SignInRequest): Promise<SignInResponse> {
    this.authService = promisify(
      this.client.getService<AuthProtoService>('AuthService'),
    );

    const response = await this.authService.SignIn(signInRequest);
    console.log('response', response);

    return response;
  }
}
