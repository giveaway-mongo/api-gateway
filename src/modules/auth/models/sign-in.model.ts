import { Field, ObjectType } from '@nestjs/graphql';
import { SignInResponse } from '@protogen/auth/auth';
import { ErrorField } from '@common/models/error.model';

@ObjectType()
class SignInResult {
  @Field()
  email: string;

  @Field()
  accessToken: string;

  @Field()
  refreshToken: string;
}

@ObjectType()
export class SignInReturnModel implements SignInResponse {
  @Field({ nullable: true })
  result: SignInResult;

  @Field({ nullable: true })
  errors: ErrorField;
}
