import { ArgsType, Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class BaseEntity {
  @Field()
  _id: string;

  @Field()
  guid: string;
}

@ArgsType()
export class PaginationArgs {
  @Field((type) => Int)
  page = 1;

  @Field((type) => Int)
  limit = 10;
}
