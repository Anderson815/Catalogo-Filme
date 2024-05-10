import { Repository } from "typeorm";
import { CreateUserDto } from "../dto/create-user.dto";
import { User } from "../entities/user.entity";
import { UserGatewayInterface } from "./user-gateway-interface";
import { UserEntityTypeORM } from "../entities/user-typeorm.entity";
import { plainToClass } from "class-transformer";
import { UserResponse } from "../dto/user-response.dto";
import { InjectRepository } from "@nestjs/typeorm";

export class UserGatewayAdapterTypeORM implements UserGatewayInterface{
    
    constructor(
        @InjectRepository(UserEntityTypeORM)
        private readonly repository: Repository<UserEntityTypeORM>
    ){}

    async create(createUserDto: CreateUserDto): Promise<User> {
        const userSave = await this.repository.save(createUserDto);
        const user = plainToClass(User, userSave);
        return user;
    }
} 