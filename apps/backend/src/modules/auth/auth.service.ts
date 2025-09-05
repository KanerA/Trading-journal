import { Injectable, UnauthorizedException } from '@nestjs/common';
import { compareSync } from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User, UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
    constructor(private readonly usersService: UsersService) { }

    async loginUser(data: { email: string, password: string }): Promise<User | null> {
        const user = await this.usersService.login(data.email);

        if (!compareSync(data.password, user.password)) {
            throw new UnauthorizedException('Invalid credentials');
        }
        delete user.password;
        const { accessToken, refreshToken } = this.generateJwt(user);
        return { user, accessToken, refreshToken };
    }

    async validateEmail(email: string): Promise<boolean> {
        return await this.usersService.validateEmail(email);
    }

    async createUser(data: { email: string; password: string; name: string }): Promise<void> {
        // on create success - call this.loginUser
        return this.usersService.createUser(data);
    }

    private generateJwt(user: User): { accessToken: string, refreshToken: string } {
        const accessToken = jwt.sign({ sub: user.id }, process.env.ACCESS_TOKEN_SECRET!, { expiresIn: '15m' });
        // TODO: maybe store refresh in DB
        const refreshToken = jwt.sign({ sub: user.id }, process.env.REFRESH_TOKEN_SECRET!, { expiresIn: '7d' });
        return { accessToken, refreshToken };
    }
}
