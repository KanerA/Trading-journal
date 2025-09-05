import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { DbApiService } from "../../services/db-service/db-api.service";

@Injectable()
export class UsersDbApiService {
    constructor(private readonly dbApiService: DbApiService, private readonly httpService: HttpService) { }

    async createUser(data: { email: string; password: string; name: string }): Promise<void> {
        await this.dbApiService.requestWithData(this.httpService.post("/users", data));
    }


}