import { Field, InputType } from '@nestjs/graphql';
import { UserUpdateRequest } from '@protogen/user/user';

@InputType()
export class UpdateUserInput implements UserUpdateRequest {
  @Field({
    nullable: false,
  })
  guid: string;

  @Field()
  email: string;

  @Field()
  fullName: string;

  @Field()
  phoneNumber: string;

  @Field()
  avatar: string;
}
