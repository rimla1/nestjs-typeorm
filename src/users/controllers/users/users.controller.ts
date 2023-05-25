import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
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

    @Patch(":id")
    async updateUser(@Body() userUpdateData, @Param("id") id: number){
        try {
            console.log(userUpdateData, typeof(userUpdateData))
            console.log(id, typeof(id))
            return "User update: call service"
        } catch (e) {
            console.log(e)
        }
    }

    @Delete(":id")
    async deleteUser(@Param("id") id: number){
        try {
            console.log(id)
            return "user deleted: call service"
        } catch (e) {
            console.log(e)
        }
    }


}
