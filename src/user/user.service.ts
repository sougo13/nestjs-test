import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';

@Injectable()
export class UserService {

  constructor(@InjectRepository(User) private usersRepository: Repository<User>) {}

  getAll(): Promise<User[]>{
    return this.usersRepository.find();
  }

  getOneByEmail(email: string): Promise<User>{
    return this.usersRepository.findOne({email});
  }

  createUser(dto: CreateUserDto): Promise<User>{
    const newUser = this.usersRepository.create(dto);
    return this.usersRepository.save(newUser);
  }
}
