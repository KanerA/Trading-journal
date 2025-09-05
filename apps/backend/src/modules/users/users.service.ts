
import { Injectable } from '@nestjs/common';
import { UsersDbApiService } from './users-db-api.service';

export type User = any;

@Injectable()
export class UsersService {
    constructor(private readonly usersDbAPiService: UsersDbApiService) { }
    private readonly users = [
        {
            userId: 1,
            email: 'assaf@gmail.com',
            password: 'changeme',
        },
        {
            userId: 2,
            email: 'maris@gmail.com',
            password: 'guess',
        },
    ];

    async login(email: string) {
        return await this.usersDbAPiService.loginUser(email);
    }

    async findOne(email: string): Promise<User | undefined> {
        return this.users.find(user => user.email === email);
    }

    async validateEmail(email: string): Promise<boolean> {
        return await this.usersDbAPiService.validateEmail(email);
    }

    async createUser(data: { email: string; password: string; name: string }): Promise<void> {
        await this.usersDbAPiService.createUser(data);
    }
}
