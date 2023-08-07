import { Field, InputType } from '@nestjs/graphql';
import { Bid, Category, Review, User } from '@protogen/deal/deal';

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
