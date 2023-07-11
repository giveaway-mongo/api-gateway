import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { SignInReturnModel } from '../models/sign-in.model';
import { AuthService } from '../services/auth.service';
import { SignInInput } from '../dto/sign-in.input';
import { SignUpReturnModel } from '../models/sign-up.model';
import { SignUpInput } from '@src/modules/auth/dto/sign-up.input';
import { VerifyEmailTokenReturnModel } from '@src/modules/auth/models/verify-email-token.model';
import { VerifyEmailTokenInput } from '@src/modules/auth/dto/verify-email-token.input';
import { PublicRole } from '@src/decorators/auth.decorator'

@Resolver(() => SignInReturnModel)
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => SignInReturnModel)
  @PublicRole()
  async signIn(
    @Args('signInData') signInInput: SignInInput,
  ): Promise<SignInReturnModel> {
    try {
      return await this.authService.signIn(signInInput);
    } catch (error) {
      console.log('error', error);
    }
  }

  @Mutation(() => SignUpReturnModel)
  @PublicRole()
  async signUp(
    @Args('signUpData') signUpInput: SignUpInput,
  ): Promise<SignUpReturnModel> {
    try {
      const { result, errors } = await this.authService.signUp(signUpInput);

      return { result, errors };
    } catch (error) {
      console.log('error', error);
      throw error;
    }
  }

  @Mutation(() => VerifyEmailTokenReturnModel)
  @PublicRole()
  async verifyEmailTokenReturnModel(
    @Args('verifyEmailTokenData') verifyEmailTokenInput: VerifyEmailTokenInput,
  ): Promise<VerifyEmailTokenReturnModel> {
    try {
      const { errors } = await this.authService.verifyEmailToken(
        verifyEmailTokenInput,
      );

      return { errors };
    } catch (error) {
      console.log('error', error);
      throw error;
    }
  }
}
