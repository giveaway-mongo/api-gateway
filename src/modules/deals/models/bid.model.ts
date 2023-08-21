import { Field, ObjectType, InputType } from '@nestjs/graphql';
import { Bid } from '@protogen/deal/deal';

@InputType()
@ObjectType()
export class BidModel implements Bid {
  @Field()
  userGuid: string;

  @Field()
  bid: string;

  @Field()
  dateOfBid: string;
}
