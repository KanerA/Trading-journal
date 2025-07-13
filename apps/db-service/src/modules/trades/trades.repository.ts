import { Injectable } from "@nestjs/common";
import { Trade } from "@trading-journal/shared";
import { DatabaseRepository } from "../database/database.repository";

@Injectable()
export class TradesRepository {
    constructor(private readonly databaseRepository: DatabaseRepository) { }

    async getAllTrades() {
        return this.databaseRepository.trade.findMany({
            include: {
                exits: true,
            }
        }) as unknown as Trade[];
    }

    async saveTrade(trade: Trade) {
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
}
