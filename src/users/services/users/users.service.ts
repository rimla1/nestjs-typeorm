import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/users.entity';
import { CreateUserParams, UpdateUserParams } from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private userRepository: Repository<User>){}

    async getUsers(){
        const users = await this.userRepository.find()
        return users
    }

    createUser(userData: CreateUserParams){
        const user = this.userRepository.create({...userData, createdAt: new Date()})
        return this.userRepository.save(user);
    }

    updateUser(id: number, userUpdateData: UpdateUserParams){
        return this.userRepository.update({id}, {...userUpdateData})

    }

}
