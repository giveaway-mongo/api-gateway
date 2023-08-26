import { Field, InputType } from '@nestjs/graphql';
import { User } from '@protogen/deal/deal';

@InputType()
export class UserInput implements User {
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
