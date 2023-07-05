import { Field, ObjectType } from '@nestjs/graphql';
import { VerifyEmailTokenResponse } from '@protogen/auth/auth';
import { ErrorField } from '@common/models/error.model';

@ObjectType()
export class VerifyEmailTokenReturnModel
  implements Partial<VerifyEmailTokenResponse>
{
  @Field()
  errors?: ErrorField;
}
