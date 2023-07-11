import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { User } from '@src/modules/users/models/user.model';
import { UsersService } from '@src/modules/users/services/users.service';
import { AdminRole, UserRole } from '@src/decorators/auth.decorator';

@Resolver((of) => User)
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @Query((returns) => User, { name: 'user' })
  @UserRole()
  async userDetail(@Args('id', { type: () => Int }) id: number) {
    return this.usersService.findOne(id);
  }

  @Query((returns) => [User], { name: 'users' })
  @AdminRole()
  async userList() {
    return this.usersService.findAll();
  }
}
