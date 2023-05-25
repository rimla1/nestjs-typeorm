import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateProfileDto } from 'src/profiles/dtos/createProfile.dto';
import { ProfilesService } from 'src/profiles/services/profiles/profiles.service';

@Controller('profiles')
export class ProfilesController {

    constructor(private readonly profilesService: ProfilesService){

    }

    @Get()
    async getProfiles(){
        const profiles = await this.profilesService.getProfiles()
        return profiles
    }

    @Post()
    async createProfile(@Body() profileData: CreateProfileDto){
        const profile = await this.profilesService.createProfile(profileData)
        return profile
    }
}
