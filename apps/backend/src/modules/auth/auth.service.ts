import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { compareSync } from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User, UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
    constructor(private readonly usersService: UsersService) { }

    async loginUser(data: { email: string, password: string }): Promise<any> { // TODO: fix return type
        const user = await this.usersService.login(data.email);
        if (!user) {
            throw new NotFoundException('User not found');
        }

        if (!compareSync(data.password, user.password)) {
            throw new UnauthorizedException('Invalid credentials');
        }
        const userWithoutPassword = { ...user, password: undefined };
        const { accessToken, refreshToken } = this.generateJwt(userWithoutPassword);
        return { user, accessToken, refreshToken };
    }

    async getUserById(id: string) {
        return await this.usersService.getUserById(id);
    }

    async validateEmail(email: string): Promise<boolean> {
        return await this.usersService.validateEmail(email);
    }

    async createUser(data: { email: string; password: string; name: string }): Promise<{ accessToken: string, refreshToken: string }> {
        // on create success - call this.loginUser
        const newUser = await this.usersService.createUser(data);
        const userWithoutPassword = { ...newUser, password: undefined };

        const { accessToken, refreshToken } = this.generateJwt(userWithoutPassword);
        return { accessToken, refreshToken };
    }

    private generateJwt(user: Omit<User, "password">): { accessToken: string, refreshToken: string } {
        const accessToken = jwt.sign({ sub: user.id }, process.env.ACCESS_TOKEN_SECRET!, { expiresIn: '15m' });
        // TODO: maybe store refresh in DB
        const refreshToken = jwt.sign({ sub: user.id }, process.env.REFRESH_TOKEN_SECRET!, { expiresIn: '7d' });
        return { accessToken, refreshToken };
    }
}
