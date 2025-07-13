import { Global, Module } from "@nestjs/common";
import { TradesRepository } from "./trades.repository";
import { TradesService } from "./trades.service";

@Global()
@Module({
    providers: [TradesService, TradesRepository],
    exports: [TradesService, TradesRepository]
})
export default class TradesModule { }