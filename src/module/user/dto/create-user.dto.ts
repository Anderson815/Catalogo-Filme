import { IsDate, IsEmail, IsEnum, IsNotEmpty, IsString, Length } from "class-validator";
import { EnumGender } from "../enums/gender.enum";
import { Transform } from "class-transformer";
import * as moment from 'moment';

export class CreateUserDto{

    @IsNotEmpty()
    @IsString()
    @Length(3)
    name: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    @Length(8)
    password: string;

    @IsNotEmpty()
    @IsEnum(EnumGender)
    gender: EnumGender;

    @IsNotEmpty()
    @IsDate({message: `releaseDate must be a valid ISO 8601 date string`})
    @Transform(({value}) => moment(value).toDate())
    dateBirth: Date;
}