import { Injectable } from "@nestjs/common";
import { Trade } from "@trading-journal/shared";
import { TradesDbApiService } from "./trades-db-api.service";

@Injectable()
export class TradesService {
    constructor(private readonly tradesDbApiService: TradesDbApiService) { }
    async getAllTrades(): Promise<Trade[]> {
        return await this.tradesDbApiService.getAllTrades();
    }

    async saveTrade(trade: Trade): Promise<void> {
        return await this.tradesDbApiService.saveTrade(trade);
    }

    async deleteTrade(tradeId: string): Promise<void> {
        return await this.tradesDbApiService.deleteTrade(tradeId);
    }
}