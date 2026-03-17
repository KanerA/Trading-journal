import { Injectable, NestMiddleware, UnauthorizedException } from "@nestjs/common";
import { Request } from "express";
import jwt from 'jsonwebtoken';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: Function) {
        console.log("kfdhjafhkdjgfkhdsgf")
        const accessToken = req.cookies['accessToken']
        console.log("accessToken", accessToken)
        if (!accessToken) throw new UnauthorizedException('No token provided');

        jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET!, (err, payload) => {
            if (err) {
                console.log(err)
                throw new UnauthorizedException('Invalid token');
            } else {
                console.log(payload, new Date(payload.exp! * 1000), new Date());
                console.log("!payload");
                next();
            }
        });
    }
}