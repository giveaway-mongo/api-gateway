import { Field, ObjectType } from '@nestjs/graphql';
import { DealDetailResponse } from '@protogen/deal/deal';
import { ErrorField } from '@common/models/error.model';
import { UserModel } from './user.model';
import { BidModel } from './bid.model';
import { ReviewModel } from './review.model';
import { CategoryModel } from './category.model';

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
  author: UserModel;

  @Field()
  buyer: UserModel;

  @Field(() => [BidModel])
  bids: BidModel[];

  @Field(() => [ReviewModel])
  reviews: ReviewModel[];

  @Field(() => [UserModel])
  reportedBy: UserModel[];

  @Field()
  category: CategoryModel;

  @Field(() => [String])
  photos: string[];
}

@ObjectType()
export class DealDetailReturnModel implements DealDetailResponse {
  @Field({ nullable: true })
  result: DealDetailResult;

  @Field({ nullable: true })
  errors: ErrorField;
}
