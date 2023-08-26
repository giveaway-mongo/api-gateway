import { Field, InputType } from '@nestjs/graphql';
import { Review } from '@protogen/deal/deal';

@InputType()
export class ReviewInput implements Review {
  @Field()
  userGuid: string;

  @Field()
  review: string;
}
