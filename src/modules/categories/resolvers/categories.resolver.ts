import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserRole } from '@src/decorators/auth.decorator';
import {
  CategoryDeleteReturnModel,
  CategoryDetailReturnModel,
} from '../models/category.model';
import { CategoriesService } from '../services/categories.service';
import { CreateCategoryInput } from '../dto/create-category.input';
import { UpdateCategoryInput } from '../dto/update-category.input';
import { ListCategoryInput } from '../dto/list-category.input';

@Resolver(() => CategoryDetailReturnModel)
export class CategoriesResolver {
  constructor(private categoriesService: CategoriesService) {}

  @Mutation(() => CategoryDetailReturnModel)
  @UserRole()
  async categoryCreate(
    @Args('createCategoryInput') createCategoryInput: CreateCategoryInput,
  ): Promise<CategoryDetailReturnModel> {
    return this.categoriesService.create(createCategoryInput);
  }

  @Mutation(() => CategoryDetailReturnModel)
  @UserRole()
  async categoryUpdate(
    @Args('id', { type: () => String }) id: string,
    @Args('updateCategoryInput') updateCategoryInput: UpdateCategoryInput,
  ): Promise<CategoryDetailReturnModel> {
    return this.categoriesService.update(id, updateCategoryInput);
  }

  @Query(() => CategoryDetailReturnModel)
  @UserRole()
  async categoryDetail(
    @Args('id', { type: () => String }) id: string,
  ): Promise<CategoryDetailReturnModel> {
    return this.categoriesService.findOne(id);
  }

  @Query(() => [CategoryDetailReturnModel])
  @UserRole()
  async categoryList(
    @Args('categoryListRequest') categoryListRequest: ListCategoryInput,
  ) {
    return this.categoriesService.findAll(categoryListRequest);
  }

  @Query(() => CategoryDeleteReturnModel)
  @UserRole()
  async categoryDelete(
    @Args('id', { type: () => String }) id: string,
  ): Promise<CategoryDeleteReturnModel> {
    return this.categoriesService.remove(id);
  }
}
