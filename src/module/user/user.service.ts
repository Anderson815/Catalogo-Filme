import { BadRequestException, ConflictException, Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { JwtTokenDto } from './dto/jwtToken.dto';
import { UserGatewayInterface } from './gateways/user-gateway-interface';
import { hashSync, compareSync } from "bcrypt";
import { plainToClass } from 'class-transformer';
import { UserResponse } from './dto/user-response.dto';
import * as moment from 'moment';
import { UserLoginDto } from './dto/user-login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
    constructor(
        @Inject('UserGatewayBDTypeORM')
        private userGateway: UserGatewayInterface,
        private jwtService: JwtService
    ){}

    async create(createUserDto: CreateUserDto){            
        const yearOldMin = 10;

        const dateMomentBirth = moment(createUserDto.dateBirth);
        const dateMomentNow = moment(new Date);
        
        if(dateMomentNow.diff(dateMomentBirth, 'year') <= yearOldMin)
            throw new BadRequestException(`You must be more or equal than 10 years old`);

        const userByEmail = await this.userGateway.getByEmail(createUserDto.email);
        
        if(userByEmail)
            throw new ConflictException(`Already exists user with email`)

        createUserDto.password = hashSync(createUserDto.password, Number(process.env.BCRYPT_SALT));
        const newUser = await this.userGateway.create(createUserDto);
        const userToResponse = plainToClass(UserResponse, newUser);
        return userToResponse;
    }

    async auth(userLoginDto: UserLoginDto){
        const userByEmail = await this.userGateway.getByEmail(userLoginDto.email);

        if (!userByEmail) {
            throw new UnauthorizedException('Password or email is wrong');
        }

        const isPasswordValid = compareSync(userLoginDto.password, userByEmail.password);

        if (!isPasswordValid) {
            throw new UnauthorizedException('Password or email is wrong');
        }

        const jwtToken = await this.generateJwtTokenDto();

        return jwtToken;
    }

    async checkCredencialsToJwt(token: string, refresh = false){
        try{            
            if(!refresh){
               await this.jwtService.verify(token, {
                    secret: process.env.JWT_SECRET_KEY,
                    ignoreExpiration: false
                })                
            }
            else{
                await this.jwtService.verify(token, {
                    secret: process.env.JWT_SECRET_REFRESH_KEY,
                    ignoreExpiration: false
                })                
            }

        }catch(error){
            throw new BadRequestException(error);
        }
    }

    private async generateJwtTokenDto(){
        const jwtToken: JwtTokenDto = {} as JwtTokenDto;

        const [ accessToken, refreshToken] = await Promise.all([
            this.jwtService.signAsync({}, {
                secret: process.env.JWT_SECRET_KEY,
                expiresIn: Number(process.env.JWT_SECRET_KEY_EXPIRES_IN)
            }),
            this.jwtService.signAsync({}, {
                secret: process.env.JWT_SECRET_REFRESH_KEY,
                expiresIn: Number(process.env.JWT_SECRET_KEY_REFRESH_EXPIRES_IN)
            }),
        ]) 

        jwtToken.accessToken = accessToken;
        jwtToken.refreshToken = refreshToken;
        
        return jwtToken;
    }
}
