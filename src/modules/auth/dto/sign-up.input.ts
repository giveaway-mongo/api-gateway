import { Field, InputType } from '@nestjs/graphql';
import { SignUpRequest } from '@protogen/auth/auth';

@InputType()
export class SignUpInput implements SignUpRequest {
  @Field()
  fullName: string;

  @Field()
  phoneNumber: string;

  @Field()
  email: string;

  @Field()
  password: string;
}
