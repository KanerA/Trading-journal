import { Body, Controller, Delete, Get, Param, Post, Query } from "@nestjs/common";
import { Trade } from "@trading-journal/types";
import { TradesService } from "./trades.service";

@Controller("trades")
export class TradesController {
    constructor(private readonly tradesService: TradesService) { }

    @Get()
    async getAllTrades(@Query("userId") userId: string): Promise<Trade[]> {
        return await this.tradesService.getAllTrades(userId);
    }

    @Post()
    async saveTrade(@Body() body: Trade & { userId: string }): Promise<any> {
        const { userId, ...trade } = body;
        return await this.tradesService.saveTrade(trade as Trade, userId);
    }

    @Delete("/:tradeId")
    async deleteTrade(@Param("tradeId") tradeId: string) {
        return await this.tradesService.deleteTrade(tradeId);
    }
}
