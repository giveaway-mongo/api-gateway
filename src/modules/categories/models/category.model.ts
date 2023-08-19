import { Field, ObjectType } from '@nestjs/graphql';
import {
  CategoryDeleteResponse,
  CategoryDetailResponse,
} from '@protogen/category/category';
import { ErrorField } from '@common/models/error.model';

@ObjectType()
class CategoryDetailResult {
  @Field()
  guid: string;

  @Field()
  title: string;

  @Field()
  description: string;

  @Field()
  parentGuid: string;
}

@ObjectType()
export class CategoryDetailReturnModel implements CategoryDetailResponse {
  @Field({ nullable: true })
  result: CategoryDetailResult;

  @Field({ nullable: true })
  errors: ErrorField;
}

@ObjectType()
export class CategoryDeleteReturnModel implements CategoryDeleteResponse {
  @Field({ nullable: true })
  errors: ErrorField;
}
