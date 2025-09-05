import { Body, Controller, Delete, Get, Post, Req } from "@nestjs/common";
import { Trade } from "@trading-journal/types";
import { Request } from "express";
import jwt from 'jsonwebtoken';
import { TradesService } from "./trades.service";

@Controller("trade")
export class TradesController {
    constructor(private readonly tradeService: TradesService) { }
    @Get()
    async getAllTrades(@Req() req: Request): Promise<any> {
        const userId = (jwt.decode(req.cookies["accessToken"]))?.sub;
        return await this.tradeService.getAllTrades();
    }

    @Post()
    async createTrade(@Req() req: Request, @Body() trade: Trade): Promise<any> {
        const userId = (jwt.decode(req.cookies["accessToken"]))?.sub;
        return await this.tradeService.saveTrade(trade)
    }


    @Delete()
    async deleteTrade(@Body("tradeId") tradeId: string): Promise<void> {
        return await this.tradeService.deleteTrade(tradeId)
    }
}