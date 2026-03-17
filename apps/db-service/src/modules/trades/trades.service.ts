import { Injectable } from "@nestjs/common";
import { Trade } from "@trading-journal/types";
import { TradesRepository } from "./trades.repository";

@Injectable()
export class TradesService {
    constructor(
        private readonly tradesRepository: TradesRepository
    ) { }

    async getAllTrades(userId: string) {
        return this.tradesRepository.getAllTrades(userId);
    }

    async saveTrade(trade: Trade, userId: string) {
        return this.tradesRepository.saveTrade(trade, userId);
    }

    async deleteTrade(tradeId: string) {
        return this.tradesRepository.deleteTrade(tradeId);
    }
}
