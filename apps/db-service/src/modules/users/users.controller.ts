import { Body, Controller, Post } from "@nestjs/common";
import { UsersService } from "./users.service";

@Controller("users")
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Post()
    async createUser(@Body() user: any): Promise<any> {
        return await this.usersService.createUser(user);
    }
}
