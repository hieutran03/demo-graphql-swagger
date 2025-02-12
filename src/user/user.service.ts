import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private readonly userRepository: Repository<User>){}
  create(createUserDto: CreateUserDto) {
    const orders = createUserDto.orders.map((order)=>new Order(order));
    const newUser = new User({
      ...createUserDto,
      orders
    })
    const res = this.userRepository.save(newUser);
    return res;
  }

  findAll() {
    return this.userRepository.find({
      relations: {orders: true}
    });
  }

  findOne(id: number) {
    return this.userRepository.find({
      where: {id},
      relations: {orders: true}
    })
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
