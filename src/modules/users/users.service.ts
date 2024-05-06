import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import mongoose, { Model } from 'mongoose';
import { User } from './schemas/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import {genSaltSync, hashSync} from 'bcryptjs';
import { compareSync } from 'bcryptjs';

@Injectable() // provider
export class UsersService {
  constructor(@InjectModel(User.name) private userModel:Model<User>){}

  getHashPassword = (password: string) =>{
    var salt = genSaltSync(10);
    var hash = hashSync(password, salt);
    return hash;
  }

  async create(createUserDto: CreateUserDto) {
    const hashPassword = this.getHashPassword(createUserDto.password);
    let user = await this.userModel.create({
      email: createUserDto.email,
      password: hashPassword,
      name: createUserDto.name
    })

    return user ;
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: string) {
    /*
    try {
      return this.userModel.findOne({
        _id: id
      })
    } catch (error) {
      return 'not found user'
    }*/

    if(!mongoose.Types.ObjectId.isValid(id))
      return 'not found user';

    return this.userModel.findOne({
      _id: id
    })
  }

  findOneByEmail(username: string) {
    if(!mongoose.Types.ObjectId.isValid(username))
      return 'not found user';

    return this.userModel.findOne({
      email: username
    })
  }

  isValidPassword(password:string, hash: string){
    return compareSync(password, hash);
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return await this.userModel.updateOne({_id: id},{...updateUserDto})
  }

  remove(id: string) {
    if(!mongoose.Types.ObjectId.isValid(id))
      return 'not found user';

    return this.userModel.deleteOne({
      _id: id
    })
  }
}
