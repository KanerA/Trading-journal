import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import DatabaseModule from './modules/database/database.module';
import { TradesController } from './modules/trades/trades.controller';
import TradesModule from './modules/trades/trades.module';

@Module({
  imports: [DatabaseModule, TradesModule],
  controllers: [AppController, TradesController],
  providers: [AppService],
})
export class AppModule { }
