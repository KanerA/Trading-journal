import { Injectable, UnauthorizedException } from '@nestjs/common';
import { User, UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
    constructor(private readonly usersService: UsersService) { }

    async validateUser(username: string, pass: string): Promise<User | null> {
        const user = await this.usersService.findOne(username);
        if (user?.password !== pass) {
            throw new UnauthorizedException();
        }
        const { password, ...result } = user;
        // TODO: Generate a JWT and return it here
        console.log(result)
        return result;
    }

    async validateEmail(email: string): Promise<boolean> {
        const user = await this.usersService.findOne(email);
        return !!user;
    }

    async createUser(data: { email: string; password: string; name: string }): Promise<void> {
        return this.usersService.createUser(data);
    }
}
