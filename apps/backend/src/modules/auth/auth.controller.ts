import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { hash } from 'bcrypt';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    // TODO: make route for checking availability of username/email using debounce in frontend

    @HttpCode(HttpStatus.OK)
    @Post('login')
    async login(@Body() body: { username: string; password: string }) {
        const user = await this.authService.validateUser(body.username, body.password);
        if (!user) {
            return { message: 'Invalid credentials' };
        }
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
