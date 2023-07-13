import { Field, ObjectType } from '@nestjs/graphql';
import { UserDetailResponse } from '@protogen/user/user';
import { ErrorField } from '@common/models/error.model';

@ObjectType()
class UserDetailResult {
  @Field()
  id: string;

  @Field()
  guid: string;

  @Field()
  avatar: string;

  @Field()
  email: string;

  @Field()
  fullName: string;

  @Field()
  phoneNumber: string;

  @Field()
  role: string;

  @Field()
  createdAt: string;

  @Field()
  updatedAt: string;
}

@ObjectType()
export class UserDetailReturnModel implements UserDetailResponse {
  @Field({ nullable: true })
  result: UserDetailResult;

  @Field({ nullable: true })
  errors: ErrorField;
}
