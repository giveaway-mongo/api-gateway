import { Field, ObjectType } from '@nestjs/graphql';
import { Bid } from '@protogen/deal/deal';

@ObjectType()
export class BidModel implements Bid {
  @Field()
  userGuid: string;

  @Field()
  bid: string;

  @Field()
  dateOfBid?: string;

  @Field()
  order: string;
}
