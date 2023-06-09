import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class SignInReturnModel {
  @Field()
  email: string;

  @Field()
  accessToken: string;

  @Field()
  refreshToken: string;
}
