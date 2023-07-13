import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { UserDetailReturnModel } from '@src/modules/users/models/user.model';
import { UsersService } from '@src/modules/users/services/users.service';
import { AdminRole, UserRole } from '@src/decorators/auth.decorator';

@Resolver((of) => UserDetailReturnModel)
export class UsersResolver {
  constructor(private usersService: UsersService) {}

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
