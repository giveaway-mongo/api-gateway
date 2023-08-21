import { Field, InputType } from '@nestjs/graphql';
import { UserModel } from '../models/user.model';
import { BidModel } from '../models/bid.model';
import { ReviewModel } from '../models/review.model';
import { CategoryModel } from '../models/category.model';

@InputType()
export class CreateDealInput {
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
