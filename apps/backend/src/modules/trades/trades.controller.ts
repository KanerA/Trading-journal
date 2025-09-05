import { Body, Controller, Delete, Get, Post, Req } from "@nestjs/common";
import { Trade } from "@trading-journal/types";
import { Request } from "express";
import { TradesService } from "./trades.service";

@Controller("trade")
export class TradesController {
    constructor(private readonly tradeService: TradesService) { }
    @Get()
    async getAllTrades(@Req() req: Request): Promise<any> {
        console.log(req.cookies["accessToken"]);
        return await this.tradeService.getAllTrades();
    }

    @Post()
    async createTrade(@Body() trade: Trade): Promise<any> {
        return await this.tradeService.saveTrade(trade)
    }


    @Delete()
    async deleteTrade(@Body("tradeId") tradeId: string): Promise<void> {
        return await this.tradeService.deleteTrade(tradeId)
    }
}