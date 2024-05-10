import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserGatewayInterface } from './gateways/user-gateway-interface';
import { hashSync, compareSync } from "bcrypt";
import { plainToClass } from 'class-transformer';
import { UserResponse } from './dto/user-response.dto';

@Injectable()
export class UserService {
    constructor(
        @Inject('UserGatewayBDTypeORM')
        private userGateway: UserGatewayInterface
    ){}

    async create(createUserDto: CreateUserDto){            
        createUserDto.password = hashSync(createUserDto.password, Number(process.env.BCRYPT_SALT));
        const newUser = await this.userGateway.create(createUserDto);
        const userToResponse = plainToClass(UserResponse, newUser);
        return userToResponse;
    }
}
