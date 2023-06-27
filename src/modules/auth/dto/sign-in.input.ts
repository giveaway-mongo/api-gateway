import { Field, InputType } from '@nestjs/graphql';
import { SignInRequest } from '@protogen/auth/auth';

@InputType()
export class SignInInput implements SignInRequest {
  @Field()
  email: string;

  @Field()
  password: string;
}
