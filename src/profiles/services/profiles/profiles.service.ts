import { Injectable } from '@nestjs/common';

@Injectable()
export class ProfilesService {
    getProfiles(){
        return "profiles from service"
    }

    createProfile(){
        return 'Single profile from service'
    }

}
