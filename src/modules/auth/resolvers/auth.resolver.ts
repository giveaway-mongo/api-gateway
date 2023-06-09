import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { SignInReturnModel } from '../models/sign-in.model';
import { AuthService } from '../services/auth.service';
import { SignInInput } from '../dto/sign-in.input';
import { SignInResponse } from '@protogen/auth/auth'

@Resolver(() => SignInReturnModel)
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => SignInReturnModel)
  async signIn(@Args('signInData') signInInput: SignInInput) {
    try {
      console.log('hello');
      return await this.authService.signIn(signInInput);
    } catch (error) {
      console.log('error', error);
    }
  }
}
