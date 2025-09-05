import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { UsersService } from "./users.service";

@Controller("users")
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Post()
    async createUser(@Body() user: any): Promise<any> {
        return await this.usersService.createUser(user);
    }

    @Post("login")
    async loginUser(@Body() { email }: { email: string }): Promise<any> {
        return await this.usersService.loginUser(email);
    }

    @Get("validate-email")
    async validateEmail(@Query("email") email: string): Promise<boolean> {
        return await this.usersService.validateEmail(email);
    }
}
