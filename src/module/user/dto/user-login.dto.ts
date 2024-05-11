import { IsEmail, IsNotEmpty, IsString, Length } from "class-validator";

export class UserLoginDto{
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    @Length(8)
    password: string;
}