import { Field, ObjectType } from '@nestjs/graphql';
import { Category } from '@protogen/category/category';

@ObjectType()
export class CategoryModel implements Category {
  @Field()
  guid: string;

  @Field()
  title: string;

  @Field()
  description: string;

  @Field()
  parentGuid: string;
}
