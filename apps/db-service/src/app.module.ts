import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import DatabaseModule from './modules/database/database.module';
import { TradesController } from './modules/trades/trades.controller';
import TradesModule from './modules/trades/trades.module';
import { UsersController } from './modules/users/users.controller';
import UsersModule from './modules/users/users.module';

@Module({
  imports: [DatabaseModule, TradesModule, UsersModule],
  controllers: [AppController, TradesController, UsersController],
  providers: [AppService],
})
export class AppModule { }
