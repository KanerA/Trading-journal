import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { TradesService } from "./trades.service";

@Controller("trades")
export class TradesController {
    constructor(private readonly tradesService: TradesService) { }

    @Get()
    async getAllTrades(): Promise<any[]> { //TODO: convert to Trade later
        return await this.tradesService.getAllTrades();
    }

    @Post()
    async saveTrade(@Body() trade: any): Promise<any> {
        return await this.tradesService.saveTrade(trade);
    }

    @Delete("/:tradeId")
    async deleteTrade(@Param("tradeId") tradeId: string) {
        return await this.tradesService.deleteTrade(tradeId)
    }
}
