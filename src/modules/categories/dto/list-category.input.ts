import { Field, InputType } from '@nestjs/graphql';
import { CategoryListRequest } from '@protogen/category/category';
import { ListOptions } from '@protogen/common/common';

@InputType()
class Filter {
  [key: string]: string;
}

@InputType()
class CategoryListOptions implements ListOptions {
  @Field(() => Filter)
  filter: Filter;

  @Field(() => [String])
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
