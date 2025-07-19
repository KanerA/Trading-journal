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

    async upsertTrade(trade: Trade) {
        const formattedExits = trade.exits.map(exit => ({ ...exit, tradeId: undefined }))
        await this.databaseRepository.trade.upsert({
            where: { id: trade.id },
            create: {
                ...trade,
                exits: {
                    create: formattedExits,
                },
            },
            update: {
                ...trade,
                exits: undefined,
            },
            include: {
                exits: true,
            }
        });

        await this.databaseRepository.exit.deleteMany({
            where: { tradeId: trade.id }
        });

        await this.databaseRepository.exit.createMany({
            data: trade.exits.map(exit => ({
                ...exit,
                tradeId: trade.id,
            })),
        });

        return this.databaseRepository.trade.findUnique({
            where: { id: trade.id },
            include: { exits: true },
        });
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

    async deleteTrade(tradeId: string) {
        this.databaseRepository.exit.deleteMany({ where: { tradeId } })
        return this.databaseRepository.trade.delete({
            where: {
                id: tradeId
            },
        })
    }
}
