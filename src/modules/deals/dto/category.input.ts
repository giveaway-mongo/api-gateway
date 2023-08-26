import { Field, InputType } from '@nestjs/graphql';
import { Category } from '@protogen/category/category';

@InputType()
export class CategoryInput implements Category {
  @Field()
  guid: string;

  @Field()
  title: string;

  @Field()
  description: string;

  @Field()
  parentGuid: string;
}
