import { Field, ObjectType } from '@nestjs/graphql';
import { ErrorField } from '@common/models/error.model';

@ObjectType()
export class SignUpReturnModel {
  @Field()
  result: null;

  @Field()
  errors: ErrorField;
}
