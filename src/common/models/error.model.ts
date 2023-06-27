import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Error } from '@protogen/common/common';

@ObjectType()
class FieldError {
  @Field(() => [String])
  location: string[];

  @Field()
  message: string;

  @Field()
  type: string;
}

@ObjectType()
export class ErrorField implements Error {
  @Field(() => [FieldError])
  fieldErrors: FieldError[];

  @Field(() => Int)
  errorCode: number;

  @Field(() => [String])
  nonFieldErrors: string[];
}
