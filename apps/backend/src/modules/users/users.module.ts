import { Module } from '@nestjs/common';
import { DbApiModule } from 'src/services/db-service/db-api.module';
import { UsersDbApiService } from './users-db-api.service';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [DbApiModule],
  controllers: [UsersController],
  providers: [UsersService, UsersDbApiService],
  exports: [UsersService],
})
export class UsersModule { }
