import { Injectable } from "@nestjs/common";
import { Trade } from "@trading-journal/shared";
import { TradesRepository } from "./trades.repository";

@Injectable()
export class TradesService {
    constructor(
        private readonly tradesRepository: TradesRepository
    ) { }

    async getAllTrades() {
        return this.tradesRepository.getAllTrades();
    }

    async saveTrade(trade: Trade) {
        return this.tradesRepository.upsertTrade(trade);
    }

    async deleteTrade(tradeId: string) {
        return this.tradesRepository.deleteTrade(tradeId);
    }
}