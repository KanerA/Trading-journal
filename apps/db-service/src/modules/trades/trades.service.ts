import { Injectable } from "@nestjs/common";
import { TradesRepository } from "./trades.repository";

@Injectable()
export class TradesService {
    constructor(
        private readonly tradesRepository: TradesRepository
    ) { }

    async getAllTrades() {
        return this.tradesRepository.getAllTrades();
    }
}