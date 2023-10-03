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
  constructor(@Inject(AUTH_CLIENT) private client: ClientGrpc) {
    this.authService = promisify(
      this.client.getService<AuthProtoService>('AuthService'),
    );
  }
  private authService: AuthProtoService;

  async signIn(signInRequest: SignInRequest): Promise<SignInResponse> {
    return await this.authService.SignIn(signInRequest);
  }

  async signUp(signUpRequest: SignUpRequest): Promise<SignUpResponse> {
    return await this.authService.SignUp(signUpRequest);
  }

  async verifyEmailToken(
    verifyEmailTokenRequest: VerifyEmailTokenRequest,
  ): Promise<VerifyEmailTokenResponse> {
    return await this.authService.VerifyEmailToken(verifyEmailTokenRequest);
  }
}
