import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import jwt from 'jsonwebtoken';


@Injectable()
export class JwtAuthGuard implements CanActivate {
    constructor() {

    }
    canActivate(context: ExecutionContext): boolean {
        const request = context.switchToHttp().getRequest();
        const accessToken = request.cookies['accessToken']

        if (!accessToken) {
            throw new UnauthorizedException('No token provided');
        };
        try {
            const payload = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET!);
            request.user = payload.sub
            return true
        } catch (error) {
            throw new UnauthorizedException('Invalid token');
        }
    }
}