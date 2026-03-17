import { Body, Controller, Get, HttpCode, HttpStatus, NotFoundException, Post, Req, Res, UseGuards } from '@nestjs/common';
import { hash } from 'bcrypt';
import { Request, Response } from 'express';
import { JwtAuthGuard } from '../../guards/jwtAuth.guard';
import { AuthService } from './auth.service';

export interface AuthenticationResponse {
    accessToken: string,
    refreshToken: string,
}

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    // TODO: make route for checking availability of username/email using debounce in frontend

    @Get("status")
    async checkAuthStatus() {
        return { status: "ok" };
    }

    @UseGuards(JwtAuthGuard)
    @Get("me")
    async getMe(@Req() req: Request) {
        const userId = (req as any).user as string;
        const user = await this.authService.getUserById(userId);
        if (!user) throw new NotFoundException('User not found');
        const { password: _, ...userWithoutPassword } = user;
        return userWithoutPassword;
    }

    @HttpCode(HttpStatus.OK)
    @Post('login')
    async login(@Res({ passthrough: true }) res: Response, @Body() body: { email: string; password: string }) {
        const { user, accessToken, refreshToken } = await this.authService.loginUser(body);

        res.cookie('refreshToken', refreshToken, { httpOnly: true, secure: true, maxAge: 15 * 60 * 1000 });
        res.cookie('accessToken', accessToken, { httpOnly: true, secure: true, maxAge: 7 * 24 * 60 * 60 * 1000 });

        return user;
    }

    @HttpCode(HttpStatus.OK)
    @Post('logout')
    logout(@Res({ passthrough: true }) res: Response) {
        res.clearCookie('accessToken');
        res.clearCookie('refreshToken');
    }

    @Post('signup')
    async signUp(@Res({ passthrough: true }) res: Response, @Body() body: { email: string; password: string; name: string }) {
        try {
            const existing = await this.authService.validateEmail(body.email);
            if (existing) throw new Error("Email already registered");

            const hashedPassword = await hash(body.password, 12);
            const { accessToken, refreshToken } = await this.authService.createUser({ email: body.email, password: hashedPassword, name: body.name });
            res.cookie('refreshToken', refreshToken, { httpOnly: true, secure: true, maxAge: 15 * 60 * 1000 });
            res.cookie('accessToken', accessToken, { httpOnly: true, secure: true, maxAge: 7 * 24 * 60 * 60 * 1000 });
        } catch (error) {
            // TODO: throw conflict error on duplicate, based on db
            throw error;
        }
    }
}
