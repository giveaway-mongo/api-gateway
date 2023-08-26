import { Field, InputType, PartialType } from '@nestjs/graphql';
import { CreateDealInput } from './create-deal.input';
import { BidInput } from './bid.input';
import { ReviewInput } from './review.input';
import { UserInput } from './user.input';

@InputType()
export class UpdateDealInput extends PartialType(CreateDealInput) {
  @Field(() => [BidInput], { nullable: true })
  bids: BidInput[];

  @Field(() => [ReviewInput], { nullable: true })
  reviews: ReviewInput[];

  @Field(() => [UserInput], { nullable: true })
  reportedBy: UserInput[];

  @Field(() => [String], { nullable: true })
  photos: string[];
}
