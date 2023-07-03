import { Field, ObjectType } from '@nestjs/graphql';
import { ErrorField } from '@common/models/error.model';
import { SignUpResponse } from '@protogen/auth/auth';

@ObjectType()
class SignUpResult {
  @Field()
  guid: string;

  @Field()
  verificationToken: string;

  @Field()
  confirmationLink: string;
}

@ObjectType()
export class SignUpReturnModel implements SignUpResponse {
  @Field()
  result: SignUpResult;

  @Field()
  errors: ErrorField;
}
