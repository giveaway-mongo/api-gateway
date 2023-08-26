import { Field, ObjectType } from '@nestjs/graphql';
import { Review } from '@protogen/deal/deal';

@ObjectType()
export class ReviewModel implements Review {
  @Field()
  userGuid: string;

  @Field()
  review: string;
}
