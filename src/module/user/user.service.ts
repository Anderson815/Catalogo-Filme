import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserGatewayInterface } from './gateways/user-gateway-interface';
import { hashSync, compareSync } from "bcrypt";

@Injectable()
export class UserService {
    constructor(
        @Inject('UserGatewayBDMemory')
        private userGateway: UserGatewayInterface
    ){}

    async create(createUserDto: CreateUserDto){            
        createUserDto.password = hashSync(createUserDto.password, Number(process.env.BCRYPT_SALT));
        const newUser = await this.userGateway.create(createUserDto);
        return newUser;
    }
}
