import { Injectable, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class DatabaseService extends PrismaClient implements OnModuleInit {
    onModuleInit() {
        this.$connect()
            .then(() => console.log("Database connected successfully"))
            .catch((error: any) => console.error("Database connection failed:", error));
    }
}