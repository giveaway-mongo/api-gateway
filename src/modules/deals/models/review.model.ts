import { Field, ObjectType, InputType } from '@nestjs/graphql';
import { Review } from '@protogen/deal/deal';

@InputType()
@ObjectType()
export class ReviewModel implements Review {
  @Field()
  userGuid: string;

  @Field()
  review: string;
}
