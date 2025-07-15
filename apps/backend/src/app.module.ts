import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TradesModule } from './modules/trades/trades.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TradesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
