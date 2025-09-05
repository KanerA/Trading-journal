import { Body, Controller, HttpCode, HttpStatus, Post, Res } from '@nestjs/common';
import { hash } from 'bcrypt';
import { Response } from 'express';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    // TODO: make route for checking availability of username/email using debounce in frontend

    @HttpCode(HttpStatus.OK)
    @Post('login')
    async login(@Res({ passthrough: true }) res: Response, @Body() body: { email: string; password: string }) {
        const { user, accessToken, refreshToken } = await this.authService.loginUser(body);
        res.cookie('refreshToken', refreshToken, { httpOnly: true, secure: true, maxAge: 15 * 60 * 1000 });
        res.cookie('accessToken', accessToken, { httpOnly: true, secure: true, maxAge: 7 * 24 * 60 * 60 * 1000 });
        return user;
    }

    @Post('signup')
    async signUp(@Body() body: { email: string; password: string; name: string }) {
        try {
            const existing = await this.authService.validateEmail(body.email);
            if (existing) throw new Error("Email already registered");

            const hashedPassword = await hash(body.password, 12);
            await this.authService.createUser({ email: body.email, password: hashedPassword, name: body.name });
        } catch (error) {
            // TODO: throw conflict error on duplicate, based on db
            throw error;
        }
    }
}
