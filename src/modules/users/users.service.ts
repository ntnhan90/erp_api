import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Model } from 'mongoose';
import { User } from './schemas/user.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable() // provider
export class UsersService {
  constructor(@InjectModel(User.name) private userModel:Model<User>){}

  async create(createUserDto: CreateUserDto) {
    let user = await this.userModel.create({
      email: createUserDto.email,
      password: createUserDto.password,
      name: createUserDto.name
    })

    return user ;
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
