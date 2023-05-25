import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/createUser.dto';
import { UpdateUserDto } from 'src/users/dtos/updateUser.dto';
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

    @Patch(":id")
    async updateUser(@Body() userUpdateData: UpdateUserDto, @Param("id") id: number){
        try {
            await this.usersService.updateUser(id, userUpdateData)
            return "User Updated!"
        } catch (e) {
            console.log(e)
        }
    }




}
