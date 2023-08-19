import { Inject, Injectable } from '@nestjs/common';
import { CATEGORY_CLIENT } from '@src/constants/client-names';
import { ClientGrpc } from '@nestjs/microservices';
import { CategoriesService as CategoriesProto } from '@protogen/category/service';
import { promisify } from '@common/utils/promisify';
import { CreateCategoryInput } from '../dto/create-category.input';
import { UpdateCategoryInput } from '../dto/update-category.input';
import { CategoryListRequest } from '@protogen/category/category';

@Injectable()
export class CategoriesService {
  constructor(@Inject(CATEGORY_CLIENT) private client: ClientGrpc) {
    this.categoryService = promisify(
      this.client.getService<CategoriesProto>('CategoriesService'),
    );
  }
  private categoryService: CategoriesProto;

  async create(createCategoryInput: CreateCategoryInput) {
    return await this.categoryService.CreateCategory(createCategoryInput);
  }

  async findAll(categoryListRequest: CategoryListRequest) {
    return await this.categoryService.ListCategory(categoryListRequest);
  }

  async findOne(id: string) {
    return await this.categoryService.DetailCategory({ guid: id });
  }

  async update(id: string, updateCategoryInput: UpdateCategoryInput) {
    const updateCategoryData = { guid: id, ...updateCategoryInput };

    return await this.categoryService.UpdateCategory(updateCategoryData);
  }

  async remove(id: string) {
    return await this.categoryService.DeleteCategory({ guid: id });
  }
}
