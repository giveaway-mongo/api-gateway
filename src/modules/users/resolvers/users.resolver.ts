import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AdminRole, UserRole } from '@src/decorators/auth.decorator';
import {
  UserCreateReturnModel,
  UserDetailReturnModel,
  UserUpdateReturnModel,
  UseListReturnModel,
} from '../models/user.model';
import { UsersService } from '../services/users.service';
import {
  CreateUserInput,
  UpdateUserInput,
  UserListRequest,
  UserListResponse,
} from '../dto';

@Resolver((of) => UserDetailReturnModel)
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @Mutation((returns) => UserCreateReturnModel)
  @AdminRole()
  async userCreate(
    @Args('createUserInput') createUserInput: CreateUserInput,
  ): Promise<UserCreateReturnModel> {
    return this.usersService.create(createUserInput);
  }

  @Mutation((returns) => UserUpdateReturnModel)
  @AdminRole()
  async userUpdate(
    @Args('id', { type: () => String }) id: string,
    @Args('updateUserInput') updateUserInput: UpdateUserInput,
  ): Promise<UserUpdateReturnModel> {
    return this.usersService.update(id, updateUserInput);
  }

  @Query((returns) => UserDetailReturnModel)
  @UserRole()
  async userDetail(
    @Args('id', { type: () => String }) id: string,
  ): Promise<UserDetailReturnModel> {
    return this.usersService.findOne(id);
  }

  @Query((returns) => UserListResponse)
  @AdminRole()
  async userList(
    @Args('usersListInput') usersListInput: UserListRequest,
  ): Promise<UseListReturnModel> {
    return this.usersService.findAll(usersListInput);
  }
}
