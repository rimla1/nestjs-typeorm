import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    constructor(){}

    getUsers(){
        // db connection
        const users = "call repository"
        return users
    }

    createUser(){
        //db connection
        const user = "call repository create"
        return user;
    }

}
