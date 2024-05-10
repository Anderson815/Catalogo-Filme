import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserGatewayInterface } from './gateways/user-gateway-interface';
import { hashSync, compareSync } from "bcrypt";
import { plainToClass } from 'class-transformer';
import { UserResponse } from './dto/user-response.dto';
import * as moment from 'moment';

@Injectable()
export class UserService {
    constructor(
        @Inject('UserGatewayBDTypeORM')
        private userGateway: UserGatewayInterface
    ){}

    async create(createUserDto: CreateUserDto){            
        const yearOldMin = 10;

        const dateMomentBirth = moment(createUserDto.dateBirth);
        const dateMomentNow = moment(new Date);
        
        if(dateMomentNow.diff(dateMomentBirth, 'year') <= yearOldMin)
            throw new BadRequestException(`You must be more or equal than 10 years old`);

        createUserDto.password = hashSync(createUserDto.password, Number(process.env.BCRYPT_SALT));
        const newUser = await this.userGateway.create(createUserDto);
        const userToResponse = plainToClass(UserResponse, newUser);
        return userToResponse;
    }
}
