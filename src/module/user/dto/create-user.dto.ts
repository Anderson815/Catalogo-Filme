import { IsDate, IsEmail, IsEnum, IsNotEmpty, IsString, Length } from "class-validator";
import { EnumGender } from "../enums/gender.enum";
import { Transform } from "class-transformer";
import * as moment from 'moment';
import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto{

    @ApiProperty({
        example: 'Peter',
        minimum: 5,
        description:
          'Nome do usuário que será cadastrado',
    })
    @IsNotEmpty()
    @IsString()
    @Length(3)
    name: string;

    @ApiProperty({
        example: 'peter@email.com.br',
        description:
          'email do usuário que ira consumir as funcionalidades dessa API',
    })
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @ApiProperty({
        example: '!Senha123',
        minimum: 8,
        description:
          'senha do usuário que ira consumir as funcionalidades dessa API',
    })
    @IsNotEmpty()
    @IsString()
    @Length(8)
    password: string;

    @ApiProperty({
        example: 'M',
        description:
          'sexo do usuário que ira consumir as funcionalidades dessa API',
        enum: EnumGender,
    })
    @IsNotEmpty()
    @IsEnum(EnumGender)
    gender: EnumGender;

    @ApiProperty({
        example: '2023-12-26',
        description:
          'data de nascimento do usuário. Deve respeitar o formato estabelecido pela ISO 8601 (YYYY-MM-DD)',
      })
    @IsNotEmpty()
    @IsDate({message: `releaseDate must be a valid ISO 8601 date string`})
    @Transform(({value}) => moment(value).toDate())
    dateBirth: Date;
}