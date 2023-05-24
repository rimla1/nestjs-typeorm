import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService){

    }

    @Get()
    async getUsers(){
        try {
            const users = await this.usersService.getUsers()
            return users
        } catch (e) {
            console.log(e)
        }

    }

    @Post()
    async createUser(@Body() userData: any){
        try {
            console.log(userData)
            const user = await this.usersService.createUser()
            return user
        } catch (e) {
            console.log(e)
        }
    }


}
