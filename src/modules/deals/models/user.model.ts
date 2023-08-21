import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { User } from '@protogen/deal/deal';

@InputType()
@ObjectType()
export class UserModel implements User {
  @Field()
  guid: string;

  @Field()
  email: string;

  @Field()
  fullName: string;

  @Field()
  avatarUrl: string;

  @Field()
  phoneNumber: string;

  @Field()
  role: string;

  @Field()
  bidsAvailable: number;

  @Field()
  isActive: boolean;

  @Field()
  isDeleted: boolean;
}
