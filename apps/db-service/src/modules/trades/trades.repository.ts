import { Injectable } from "@nestjs/common";

import { DatabaseRepository } from "../database/database.repository.js";

@Injectable()
export class TradesRepository {
    constructor(private readonly databaseRepository: DatabaseRepository) { }
    async getAllTrades() {
        return this.databaseRepository.trade.findMany({
            include: {
                exits: true,
            }
        }) as unknown as any[]; //TODO: convert to Trade later
    }

    async saveTrade(trade: any) { //TODO: convert to Trade later
        return this.databaseRepository.trade.create({
            data: {
                ...trade,
                exits: {
                    create: trade.exits,
                },
            },
            include: {
                exits: true,
            }
        });
    }

    async deleteTrade(tradeId: string) {
        this.databaseRepository.exit.deleteMany({ where: { tradeId } })
        return this.databaseRepository.trade.delete({
            where: {
                id: tradeId
            },
        })
    }
}
