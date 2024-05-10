import { CreateUserDto } from "../dto/create-user.dto"
import { User } from "../entities/user.entity";

export interface UserGatewayInterface{
    create(createUserDto: CreateUserDto): Promise<User>;
}