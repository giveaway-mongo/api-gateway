import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { SignInReturnModel } from '../models/sign-in.model';
import { AuthService } from '../services/auth.service';
import { SignInInput } from '../dto/sign-in.input';
import { SignUpReturnModel } from '../models/sign-up.model';
import { SignUpInput } from '@src/modules/auth/dto/sign-up.input';
import { VerifyEmailTokenReturnModel } from '@src/modules/auth/models/verify-email-token.model';
import { VerifyEmailTokenInput } from '@src/modules/auth/dto/verify-email-token.input';

@Resolver(() => SignInReturnModel)
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => SignInReturnModel)
  async signIn(
    @Args('signInData') signInInput: SignInInput,
  ): Promise<SignInReturnModel> {
    try {
      console.log('sign in triggered. Data:', signInInput);
      return await this.authService.signIn(signInInput);
    } catch (error) {
      console.log('error', error);
    }
  }

  @Mutation(() => SignUpReturnModel)
  async signUp(
    @Args('signUpData') signUpInput: SignUpInput,
  ): Promise<SignUpReturnModel> {
    try {
      console.log('sign up triggered. Data:', signUpInput);
      const { errors } = await this.authService.signUp(signUpInput);

      return { result: null, errors };
    } catch (error) {
      console.log('error', error);
    }
  }

  @Mutation(() => VerifyEmailTokenReturnModel)
  async verifyEmailTokenReturnModel(
    @Args('verifyEmailTokenData') verifyEmailTokenInput: VerifyEmailTokenInput,
  ): Promise<VerifyEmailTokenReturnModel> {
    try {
      console.log('verify email token triggered. Data:', verifyEmailTokenInput);
      const { errors } = await this.authService.verifyEmailToken(
        verifyEmailTokenInput,
      );

      return { result: null, errors };
    } catch (error) {
      console.log('error', error);
    }
  }
}
