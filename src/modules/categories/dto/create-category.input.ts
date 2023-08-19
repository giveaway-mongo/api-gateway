import { Field, InputType } from '@nestjs/graphql';
import { CategoryCreateRequest } from '@protogen/category/category';

@InputType()
export class CreateCategoryInput implements CategoryCreateRequest {
  @Field()
  userGuid: string;

  @Field()
  title: string;

  @Field()
  description: string;

  @Field({ nullable: true })
  parentGuid: string;
}
