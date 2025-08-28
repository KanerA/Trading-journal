import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { DbApiService } from "../../services/db-service/db-api.service";

@Injectable()
export class TradesDbApiService {
    constructor(private readonly dbApiService: DbApiService, private readonly httpService: HttpService) { }

    async getAllTrades(): Promise<any[]> {//TODO: convert to Trade later
        return await this.dbApiService.requestWithData(this.httpService.get("/trades"))
    }

    async saveTrade(trade: any): Promise<void> {//TODO: convert to Trade later
        return await this.dbApiService.requestWithData(this.httpService.post("/trades", trade));
    }

    async deleteTrade(tradeId: string): Promise<void> {
        await this.dbApiService.request(this.httpService.delete(`/trades/${tradeId}`));
    }
}