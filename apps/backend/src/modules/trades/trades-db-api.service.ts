import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { Trade } from "@trading-journal/shared";
import { DbApiService } from "src/services/db-service/db-api.service";

@Injectable()
export class TradesDbApiService {
    constructor(private readonly dbApiService: DbApiService, private readonly httpService: HttpService) { }

    async getAllTrades(): Promise<Trade[]> {
        return await this.dbApiService.requestWithData(this.httpService.get("/trades"))
    }

    async saveTrade(trade: Trade): Promise<void> {
        return await this.dbApiService.requestWithData(this.httpService.post("/trades", trade));
    }

    async deleteTrade(tradeId: string): Promise<void> {
        await this.dbApiService.request(this.httpService.delete(`/trades/${tradeId}`));
    }
}