import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, Length } from "class-validator";

export class UserLoginDto{

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
}