import { Field, InputType } from '@nestjs/graphql';
import { UserInput } from './user.input';
import { BidInput } from './bid.input';
import { ReviewInput } from './review.input';
import { CategoryInput } from './category.input';
import { DealCreateRequest } from '@protogen/deal/deal';

@InputType()
export class CreateDealInput implements DealCreateRequest {
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
  author: UserInput;

  @Field()
  buyer: UserInput;

  @Field(() => [BidInput])
  bids: BidInput[];

  @Field(() => [ReviewInput])
  reviews: ReviewInput[];

  @Field(() => [UserInput])
  reportedBy: UserInput[];

  @Field()
  category: CategoryInput;

  @Field(() => [String])
  photos: string[];
}
