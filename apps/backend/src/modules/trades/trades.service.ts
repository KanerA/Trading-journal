import { Injectable } from "@nestjs/common";
import { Trade } from "@trading-journal/types";
import { TradesDbApiService } from "./trades-db-api.service";

@Injectable()
export class TradesService {
    constructor(private readonly tradesDbApiService: TradesDbApiService) { }

    async getAllTrades(userId: string): Promise<Trade[]> {
        return await this.tradesDbApiService.getAllTrades(userId);
    }

    async saveTrade(trade: Trade, userId: string): Promise<void> {
        return await this.tradesDbApiService.saveTrade(trade, userId);
    }

    async deleteTrade(tradeId: string): Promise<void> {
        return await this.tradesDbApiService.deleteTrade(tradeId);
    }
}
