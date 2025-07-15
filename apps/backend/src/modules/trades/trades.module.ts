import { Module } from "@nestjs/common";
import { DbApiModule } from "src/services/db-service/db-api.module";
import { TradesDbApiService } from "./trades-db-api.service";
import { TradesController } from "./trades.controller";
import { TradesService } from "./trades.service";

@Module({
    imports: [DbApiModule],
    controllers: [TradesController],
    providers: [TradesService, TradesDbApiService],
    exports: [TradesService],
})
export class TradesModule { }