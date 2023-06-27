import { Inject, Injectable } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { AUTH_CLIENT } from '@src/constants/client-names';
import { AuthService as AuthProtoService } from '@protogen/auth/service';
import {
  SignInRequest,
  SignInResponse,
  SignUpRequest,
  SignUpResponse,
  VerifyEmailTokenRequest,
  VerifyEmailTokenResponse,
} from '@protogen/auth/auth';
import { promisify } from '@common/utils/promisify';

@Injectable()
export class AuthService {
  constructor(@Inject(AUTH_CLIENT) private client: ClientGrpc) {}
  private authService: AuthProtoService;

  async signIn(signInRequest: SignInRequest): Promise<SignInResponse> {
    this.authService = promisify(
      this.client.getService<AuthProtoService>('AuthService'),
    );

    return await this.authService.SignIn(signInRequest);
  }

  async signUp(signUpRequest: SignUpRequest): Promise<SignUpResponse> {
    this.authService = promisify(
      this.client.getService<AuthProtoService>('AuthService'),
    );

    return await this.authService.SignUp(signUpRequest);
  }

  async verifyEmailToken(
    verifyEmailTokenRequest: VerifyEmailTokenRequest,
  ): Promise<VerifyEmailTokenResponse> {
    this.authService = promisify(
      this.client.getService<AuthProtoService>('AuthService'),
    );

    return await this.authService.VerifyEmailToken(verifyEmailTokenRequest);
  }
}
