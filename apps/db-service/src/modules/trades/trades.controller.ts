import { Controller, Get } from "@nestjs/common";
import { Trade } from "@trading-journal/shared";
import { TradesService } from "./trades.service";

@Controller("trades")
export class TradesController {
    constructor(private readonly tradesService: TradesService) { }

    @Get()
    async getAllTrades(): Promise<Trade[]> {
        return await this.tradesService.getAllTrades();
    }
}
