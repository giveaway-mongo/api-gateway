import { Field, ObjectType } from '@nestjs/graphql';
import {
  UserDetailResponse,
  UserCreateResponse,
  UserUpdateResponse,
  UserListResponse,
} from '../dto';
import { ErrorField } from '@common/models/error.model';
import { User } from '@protogen/user/user';

@ObjectType()
export class UserModel implements User {
  @Field({ nullable: false })
  guid: string;

  @Field({ nullable: true })
  avatar: string;

  @Field({ nullable: false })
  email: string;

  @Field({ nullable: false })
  fullName: string;

  @Field({ nullable: false })
  phoneNumber: string;

  @Field({ nullable: false })
  role: string;
}

@ObjectType()
export class UserCreateReturnModel implements UserCreateResponse {
  @Field({ nullable: true })
  result: UserModel;

  @Field({ nullable: true })
  errors: ErrorField;
}

@ObjectType()
export class UserUpdateReturnModel implements UserUpdateResponse {
  @Field({ nullable: true })
  result: UserModel;

  @Field({ nullable: true })
  errors: ErrorField;
}

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
  result: UserModel;

  @Field({ nullable: true })
  errors: ErrorField;
}

@ObjectType()
export class UseListReturnModel implements UserListResponse {
  @Field({ nullable: true })
  results: UserModel[];

  @Field({ nullable: true })
  errors: ErrorField;

  @Field({ nullable: false })
  count: number;
}
