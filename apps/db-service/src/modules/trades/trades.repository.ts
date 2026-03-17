import { Injectable } from "@nestjs/common";
import { Trade } from "@trading-journal/types";
import { DatabaseRepository } from "../database/database.repository.js";

@Injectable()
export class TradesRepository {
    constructor(private readonly databaseRepository: DatabaseRepository) { }

    async getAllTrades(userId: string) {
        return this.databaseRepository.trade.findMany({
            where: { userId },
            include: { exits: true },
        }) as unknown as Trade[];
    }

    async saveTrade(trade: Trade, userId: string) {
        return this.databaseRepository.trade.create({
            data: {
                ...trade,
                userId,
                exits: {
                    create: trade.exits,
                },
            },
            include: { exits: true },
        });
    }

    async deleteTrade(tradeId: string) {
        this.databaseRepository.exit.deleteMany({ where: { tradeId } });
        return this.databaseRepository.trade.delete({
            where: { id: tradeId },
        });
    }
}
