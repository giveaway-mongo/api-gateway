import { Inject, Injectable } from '@nestjs/common';
import { CreateDealInput } from '../dto/create-deal.input';
import { UpdateDealInput } from '../dto/update-deal.input';
import { DealDetailReturnModel } from '@src/modules/deals/models/deal.model';
import { DEAL_CLIENT } from '@src/constants/client-names';
import { ClientGrpc } from '@nestjs/microservices';
import { DealsService as DealProtoService } from '@protogen/deal/service';
import { promisify } from '@common/utils/promisify';

@Injectable()
export class DealsService {
  constructor(@Inject(DEAL_CLIENT) private client: ClientGrpc) {
    this.dealService = promisify(
      this.client.getService<DealProtoService>('DealsService'),
    );
  }
  private dealService: DealProtoService;

  async create(createDealInput: CreateDealInput) {
    return await this.dealService.CreateDeal(createDealInput);
  }

  async findAll() {
    return await this.dealService.ListDeal(undefined);
  }

  async findOne(id: string): Promise<DealDetailReturnModel> {
    return await this.dealService.DetailDeal({ guid: id });
  }

  async update(id: string, updateDealInput: UpdateDealInput) {
    const updateDealData = { guid: id, ...updateDealInput };
    return await this.dealService.UpdateDeal(updateDealData);
  }

  // async remove(id: string) {
  //   this.dealService = promisify(
  //     this.client.getService<DealProtoService>('DealsService'),
  //   );
  //   return await this.dealService.DeleteDeal({ guid: id });
  // }
}
