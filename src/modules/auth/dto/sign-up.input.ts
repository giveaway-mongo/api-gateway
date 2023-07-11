import { Field, InputType } from '@nestjs/graphql';
import { SignUpRequest } from '@protogen/auth/auth';

type WithoutUserGuid<T> = Omit<T, 'userGuid'>;

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
