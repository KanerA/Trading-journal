import { Body, Controller, Get, Post } from "@nestjs/common";
import { Trade } from "@trading-journal/shared";
import { TradesService } from "./trades.service";

@Controller("trade")
export class TradesController {
    constructor(private readonly tradeService: TradesService) { }
    @Get()
    async getAllTrades(): Promise<any> {
        return await this.tradeService.getAllTrades();
    }

    @Post("")
    async createTrade(@Body() trade: Trade): Promise<any> {
        return await this.tradeService.saveTrade(trade)
    }
}