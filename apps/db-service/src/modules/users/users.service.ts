import { Injectable } from "@nestjs/common";
import { UsersRepository } from "./users.repository";

@Injectable()
export class UsersService {
    constructor(
        private readonly usersRepository: UsersRepository
    ) { }


    async createUser(user: any) {
        return await this.usersRepository.createUser(user);
    }
}