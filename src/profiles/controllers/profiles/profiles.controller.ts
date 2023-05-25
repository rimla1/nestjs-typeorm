import { Controller, Get, Post } from '@nestjs/common';
import { ProfilesService } from 'src/profiles/services/profiles/profiles.service';

@Controller('profiles')
export class ProfilesController {

    constructor(private readonly profilesService: ProfilesService){

    }

    @Get()
    getProfiles(){
        const profiles = this.profilesService.getProfiles()
        return profiles
    }

    @Post()
    createProfile(){
        const profile = this.profilesService.createProfile()
        return profile
    }
}
