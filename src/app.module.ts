import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './typeorm/entities/users.entity';
import { UsersModule } from './users/users.module';



@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres', 
    host: 'localhost', 
    port: 5432, 
    username: 'almirmuminovic', 
    password: 'pass123', 
    database: 'typeorm', 
    entities: [User],
    synchronize: true, 
  }), UsersModule, ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
