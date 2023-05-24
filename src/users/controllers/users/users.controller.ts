import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/createUser.dto';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService){

    }

    @Get()
    async getUsers(){
        try {
            const users = await this.usersService.getUsers()
            console.log(users)
            return users
        } catch (e) {
            console.log(e)
        }

    }

    @Post()
    async createUser(@Body() userData: CreateUserDto){
        try {
            console.log(userData)
            const user = await this.usersService.createUser(userData)
            return user
        } catch (e) {
            console.log(e)
        }
    }


}
