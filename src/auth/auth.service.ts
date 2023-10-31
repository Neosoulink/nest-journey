import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { UsersService } from '@/users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  create(createAuthDto: CreateAuthDto) {
    console.log(
      'Create DTO ==>',
      createAuthDto,
      '\n User module service ==>',
      this.usersService.create.name,
    );
    return 'This action adds a new auth';
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    console.log(
      'Update DTO ==>',
      updateAuthDto,
      '\n User module service ==>',
      this.usersService.update.name,
    );
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
