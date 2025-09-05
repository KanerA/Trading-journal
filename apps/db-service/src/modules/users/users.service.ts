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
    async loginUser(email: string) {
        return await this.usersRepository.loginUser(email);
    }

    async validateEmail(email: string): Promise<boolean> {
        return await this.usersRepository.validateEmail(email);
    }
}