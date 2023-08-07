import { Field, ObjectType } from '@nestjs/graphql';
import {
  Bid,
  Category,
  DealDetailResponse,
  Review,
  User,
} from '@protogen/deal/deal';
import { ErrorField } from '@common/models/error.model';

@ObjectType()
class DealDetailResult {
  @Field()
  guid: string;

  @Field()
  title: string;

  @Field()
  description: string;

  @Field()
  contactMethod: string;

  @Field()
  activeUntil: string;

  @Field()
  type: string;

  @Field()
  status: string;

  @Field()
  author: User;

  @Field()
  buyer: User;

  @Field()
  bids: Bid[];

  @Field()
  reviews: Review[];

  @Field()
  reportedBy: User[];

  @Field()
  category: Category;

  @Field()
  photos: string[];
}

@ObjectType()
export class DealDetailReturnModel implements DealDetailResponse {
  @Field({ nullable: true })
  result: DealDetailResult;

  @Field({ nullable: true })
  errors: ErrorField;
}
