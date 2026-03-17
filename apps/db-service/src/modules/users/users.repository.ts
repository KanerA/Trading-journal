import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client/client";
import { DatabaseRepository } from "../database/database.repository";
import { User } from "./users.controller";

@Injectable()
export class UsersRepository {
    constructor(private readonly databaseRepository: DatabaseRepository) { }

    async createUser(user: any): Promise<User> {
        try {
            return await this.databaseRepository.user.create({ data: user })
        } catch (error) {
            if (error instanceof Prisma.PrismaClientKnownRequestError) {
                if (error.code === 'P2002') {
                    throw new Error("Email already registered");
                }
            }
            throw error;
        }
    }

    async loginUser(email: string) {
        return await this.databaseRepository.user.findUnique({ where: { email } });
    }

    async getUserById(id: string): Promise<User | null> {
        return await this.databaseRepository.user.findUnique({ where: { id } });
    }

    async validateEmail(email: string): Promise<boolean> {
        const user = await this.databaseRepository.user.findUnique({ where: { email } });
        return !!user;
    }
}
