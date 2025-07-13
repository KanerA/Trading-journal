import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { DbApiService } from "./db-api.service";

@Module({
    imports: [
        HttpModule.register({
            baseURL: process.env.DB_SERVICE_URL || "http://localhost:3001",
        })
    ], providers: [DbApiService],
    exports: [DbApiService, HttpModule]
})

export class DbApiModule { }