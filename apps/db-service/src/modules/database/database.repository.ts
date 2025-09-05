import { Injectable, OnModuleDestroy, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
@Injectable()
export class DatabaseRepository extends PrismaClient implements OnModuleInit, OnModuleDestroy {
    async onModuleInit(): Promise<void> {
        try {
            await this.$connect();
            console.log("Database connected successfully")
        } catch (error) {
            console.error("Database connection failed:", error)
        }
    }

    async onModuleDestroy() {
        console.log('PrismaService disconnecting from DB...');
        await this.$disconnect();
    }
}
