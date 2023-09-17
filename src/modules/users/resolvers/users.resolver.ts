import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AdminRole, UserRole } from '@src/decorators/auth.decorator';
import {
  UserCreateReturnModel,
  UserDetailReturnModel,
} from '../models/user.model';
import { UsersService } from '../services/users.service';
import { CreateUserInput, UpdateUserInput, UserCreateResponse } from '../dto';

@Resolver((of) => UserDetailReturnModel)
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @Mutation(() => UserCreateResponse)
  @AdminRole()
  async userCreate(
    @Args('createUserInput') createUserInput: CreateUserInput,
  ): Promise<UserCreateResponse> {
    return this.usersService.create(createUserInput);
  }

  @Mutation(() => UserCreateReturnModel)
  @AdminRole()
  async userUpdate(
    @Args('id') id: string,
    @Args('updateUserInput') updateUserInput: UpdateUserInput,
  ) {
    return this.usersService.update(id, updateUserInput);
  }

  @Query(() => UserDetailReturnModel)
  @Query((returns) => UserDetailReturnModel)
  @UserRole()
  async userDetail(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<UserDetailReturnModel> {
    return this.usersService.findOne(id);
  }

  @Query((returns) => [UserDetailReturnModel], { name: 'users' })
  @AdminRole()
  async userList() {
    return this.usersService.findAll();
  }
}
