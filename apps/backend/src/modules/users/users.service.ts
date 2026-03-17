
import { Injectable } from '@nestjs/common';
import { UsersDbApiService } from './users-db-api.service';

export type User = {
    id: string,
    email: string,
    name: string,
    password: string
}

@Injectable()
export class UsersService {
    constructor(private readonly usersDbAPiService: UsersDbApiService) { }

    async login(email: string): Promise<User> {
        return await this.usersDbAPiService.loginUser(email);
    }

    async validateEmail(email: string): Promise<boolean> {
        return await this.usersDbAPiService.validateEmail(email);
    }

    async getUserById(id: string): Promise<User | null> {
        return await this.usersDbAPiService.getUserById(id);
    }

    async createUser(data: { email: string; password: string; name: string }): Promise<User> {
        return await this.usersDbAPiService.createUser(data);
    }
}
