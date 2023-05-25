import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './typeorm/entities/users.entity';
import { UsersModule } from './users/users.module';
import { ProfilesModule } from './profiles/profiles.module';
import { Profile } from './typeorm/entities/profiles.entity';



@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres', 
    host: 'localhost', 
    port: 5432, 
    username: 'almirmuminovic', 
    password: 'pass123', 
    database: 'typeorm', 
    entities: [User, Profile],
    synchronize: true, 
  }), UsersModule, ProfilesModule, ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
