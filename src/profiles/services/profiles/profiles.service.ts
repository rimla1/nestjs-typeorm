import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Profile } from 'src/typeorm/entities/profiles.entity';
import { CreateProfileParams } from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class ProfilesService {

    constructor(@InjectRepository(Profile) private profilesRepostiory: Repository<Profile> ){}

    async getProfiles(){
        const profiles = await this.profilesRepostiory.find()
        return profiles
    }

    async createProfile(profileData: CreateProfileParams){
        const profile = await this.profilesRepostiory.create({...profileData})
        return this.profilesRepostiory.save(profile)
    }

}
