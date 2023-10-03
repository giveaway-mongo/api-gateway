import { Inject, Injectable } from '@nestjs/common';
import {
  CreateUserInput,
  UserListRequest,
  UpdateUserInput,
  UserDeleteRequest,
} from '@src/modules/users/dto';
import { ClientGrpc } from '@nestjs/microservices';
import { USER_CLIENT } from '@src/constants/client-names';
import { promisify } from '@common/utils/promisify';
import { UsersService as UsersServiceProto } from '@protogen/user/service';

@Injectable()
export class UsersService {
  constructor(@Inject(USER_CLIENT) private client: ClientGrpc) {
    this.usersService = promisify(
      this.client.getService<UsersServiceProto>('UsersService'),
    );
  }

  private usersService: UsersServiceProto;

  async create(createUserInput: CreateUserInput) {
    return await this.usersService.CreateUser(createUserInput);
  }

  async findAll(usersListRequest: UserListRequest) {
    return await this.usersService.ListUser(usersListRequest);
  }

  async findOne(id: string) {
    return await this.usersService.DetailUser({ guid: id });
  }

  async update(id: string, updateUserInput: UpdateUserInput) {
    const updateUserData: UpdateUserInput = { guid: id, ...updateUserInput };

    return await this.usersService.UpdateUser(updateUserData);
  }

  async remove(id: string) {
    const deleteUserRequest: UserDeleteRequest = { guid: id };

    return await this.usersService.DeleteUser(deleteUserRequest);
  }
}
