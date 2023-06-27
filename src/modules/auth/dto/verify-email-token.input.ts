import { Field, InputType } from '@nestjs/graphql';
import { VerifyEmailTokenRequest } from '@protogen/auth/auth';

@InputType()
export class VerifyEmailTokenInput implements VerifyEmailTokenRequest {
  @Field()
  guid: string;

  @Field()
  verificationToken: string;
}
