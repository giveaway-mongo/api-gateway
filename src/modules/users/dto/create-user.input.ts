import { Field, InputType } from '@nestjs/graphql';
import { UserCreateRequest } from '@protogen/user/user';

@InputType()
export class CreateUserInput implements UserCreateRequest {
  @Field({
    nullable: false,
  })
  email: string;

  @Field({
    nullable: false,
  })
  password: string;

  @Field({
    nullable: false,
  })
  fullName: string;

  @Field({
    nullable: false,
  })
  phoneNumber: string;

  @Field({
    nullable: true,
  })
  avatar: string;

  @Field({
    nullable: true,
  })
  role: string;
}
