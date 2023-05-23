import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { User } from '@src/modules/users/models/user.model';
import { UsersService } from '@src/modules/users/services/users.service';

@Resolver((of) => User)
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @Query((returns) => User, { name: 'user' })
  async userDetail(@Args('id', { type: () => Int }) id: number) {
    return this.usersService.findOne(id);
  }

  @Query((returns) => [User], { name: 'users' })
  async userList() {
    return this.usersService.findAll();
  }
}
