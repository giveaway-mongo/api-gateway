import { Injectable } from '@nestjs/common';
import { CreateUserInput } from '../dto/create-user.input';
import { UpdateUserInput } from '../dto/update-user.input';
import { UserDetailReturnModel } from '@src/modules/users/models/user.model';

@Injectable()
export class UsersService {
  create(createUserInput: CreateUserInput) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number): Promise<UserDetailReturnModel> {
    return Promise.resolve({
      result: {
        avatar: '',
        email: '',
        role: '',
        fullName: '',
        guid: '',
        phoneNumber: '1111',
        id: '111',
        createdAt: '12',
        updatedAt: '11',
      },
      errors: null,
    });
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
