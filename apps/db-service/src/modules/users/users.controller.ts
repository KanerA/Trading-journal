import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";
import { UsersService } from "./users.service";

export type User = {
    id: string,
    email: string,
    name: string,
    password: string
}

@Controller("users")
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Post()
    async createUser(@Body() user: any): Promise<User> {
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

    @Get(":id")
    async getUserById(@Param("id") id: string): Promise<User | null> {
        return await this.usersService.getUserById(id);
    }
}
