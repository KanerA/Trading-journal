import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { Trade } from "@trading-journal/types";
import { DbApiService } from "../../services/db-service/db-api.service";

@Injectable()
export class TradesDbApiService {
    constructor(private readonly dbApiService: DbApiService, private readonly httpService: HttpService) { }

    async getAllTrades(userId: string): Promise<Trade[]> {
        return await this.dbApiService.requestWithData(this.httpService.get(`/trades?userId=${userId}`));
    }

    async saveTrade(trade: Trade, userId: string): Promise<void> {
        return await this.dbApiService.requestWithData(this.httpService.post("/trades", { ...trade, userId }));
    }

    async deleteTrade(tradeId: string): Promise<void> {
        await this.dbApiService.request(this.httpService.delete(`/trades/${tradeId}`));
    }
}
