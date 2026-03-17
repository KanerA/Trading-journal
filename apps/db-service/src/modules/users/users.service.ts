import { Injectable } from "@nestjs/common";
import { User } from "./users.controller";
import { UsersRepository } from "./users.repository";

@Injectable()
export class UsersService {
    constructor(
        private readonly usersRepository: UsersRepository
    ) { }


    async createUser(user: User): Promise<User> {
        return await this.usersRepository.createUser(user);
    }
    async loginUser(email: string) {
        return await this.usersRepository.loginUser(email);
    }

    async getUserById(id: string): Promise<User | null> {
        return await this.usersRepository.getUserById(id);
    }

    async validateEmail(email: string): Promise<boolean> {
        return await this.usersRepository.validateEmail(email);
    }
}