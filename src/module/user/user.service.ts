import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserGatewayInterface } from './gateways/user-gateway-interface';

@Injectable()
export class UserService {
    constructor(
        @Inject('UserGatewayBDMemory')
        private userGateway: UserGatewayInterface
    ){}

    async create(createUserDto: CreateUserDto){
        const newUser = await this.userGateway.create(createUserDto);
        return newUser;
    }
}
