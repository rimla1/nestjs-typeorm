import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private userRepository: Repository<User>){}

    async getUsers(){
        // db connection
        const users = await this.userRepository.find()
        return users
    }

    createUser(){
        //db connection
        const user = "call repository create"
        return user;
    }

}
