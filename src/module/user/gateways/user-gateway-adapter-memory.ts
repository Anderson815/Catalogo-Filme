import { plainToClass } from "class-transformer";
import { CreateUserDto } from "../dto/create-user.dto";
import { User } from "../entities/user.entity";
import { UserGatewayInterface } from "./user-gateway-interface";
import { v4 as uuidv4} from 'uuid';
import { UserResponse } from "../dto/user-response.dto";

export class UserGatewayAdapterMemory implements UserGatewayInterface{

    arrayUser: User[];

    constructor(){
        this.arrayUser = []
    }

    async create(createUserDto: CreateUserDto): Promise<User> {
        const newUser = plainToClass(User, createUserDto, {excludeExtraneousValues: true});        
        newUser.id = uuidv4();
        this.arrayUser.push(newUser);
                
        const userToResponse = plainToClass(UserResponse, newUser);

        return userToResponse;
    }
}