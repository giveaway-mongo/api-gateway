import { Field, InputType } from '@nestjs/graphql';
import { Bid } from '@protogen/deal/deal';

@InputType()
export class BidInput implements Bid {
  @Field()
  userGuid: string;

  @Field()
  bid: string;

  @Field()
  dateOfBid: string;

  @Field()
  order: string;
}
