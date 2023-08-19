import { Field, InputType } from '@nestjs/graphql';
import { CategoryListRequest } from '@protogen/category/category';
import { ListOptions } from '@protogen/common/common';

@InputType()
class CategoryListOptions implements ListOptions {
  @Field()
  filter: { [key: string]: string };

  @Field()
  ordering: string[];

  @Field()
  search: string;

  @Field()
  page: number;

  @Field()
  limit: number;
}

@InputType()
export class ListCategoryInput implements CategoryListRequest {
  @Field({ nullable: true })
  options: CategoryListOptions;
}
