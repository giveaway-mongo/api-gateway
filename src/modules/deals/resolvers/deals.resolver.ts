import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { DealDetailReturnModel } from '@src/modules/deals/models/deal.model';
import { DealsService } from '@src/modules/deals/services/deals.service';
import { UserRole } from '@src/decorators/auth.decorator';
import { CreateDealInput } from '../dto/create-deal.input';
import { UpdateDealInput } from '../dto/update-deal.input';
import {
  DealCreateResponse,
  DealListResponse,
  DealUpdateResponse,
} from '@protogen/deal/deal';

@Resolver(() => DealDetailReturnModel)
export class DealsResolver {
  constructor(private dealsService: DealsService) {}

  @Mutation(() => DealCreateResponse)
  @UserRole()
  async dealCreate(
    @Args('createDealInput') createDealInput: CreateDealInput,
  ): Promise<DealCreateResponse> {
    return this.dealsService.create(createDealInput);
  }

  @Mutation(() => DealUpdateResponse)
  @UserRole()
  async dealUpdate(
    @Args('id', { type: () => String }) id: string,
    @Args('updateDealInput') updateDealInput: UpdateDealInput,
  ): Promise<DealUpdateResponse> {
    return this.dealsService.update(id, updateDealInput);
  }

  @Query(() => DealDetailReturnModel)
  @UserRole()
  async dealDetail(
    @Args('id', { type: () => String }) id: string,
  ): Promise<DealDetailReturnModel> {
    return this.dealsService.findOne(id);
  }

  @Query(() => [DealDetailReturnModel], { name: 'deals' })
  @UserRole()
  async dealList(): Promise<DealListResponse> {
    return this.dealsService.findAll();
  }

  // @Query(() => DealDetailReturnModel)
  // @UserRole()
  // async dealDelete(
  //   @Args('id', { type: () => String }) id: string,
  // ): Promise<DealDetailReturnModel> {
  //   return this.dealsService.remove(id);
  // }
}
