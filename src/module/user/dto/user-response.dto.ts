import { Expose, Exclude } from "class-transformer";
import { EnumGender } from "../enums/gender.enum";
import { ApiProperty } from "@nestjs/swagger";

export class UserResponse{

    @ApiProperty({
        example: 'f47ac10b-58cc-4372-a567-0e02b2c3d479',
        description:
          'Id do usuário que será cadastrado',
    })
    @Expose()
    id: string;

    @ApiProperty({
        example: 'Peter',
        minimum: 5,
        description:
          'Nome do usuário que será cadastrado',
    })
    @Expose()
    name: string;

    @ApiProperty({
        example: 'peter@email.com.br',
        description:
          'email do usuário que ira consumir as funcionalidades dessa API',
    })
    @Exclude()
    email: string;

    @Exclude()
    password: string;

    @ApiProperty({
        example: 'M',
        description:
          'sexo do usuário que ira consumir as funcionalidades dessa API',
        enum: EnumGender,
    })
    @Expose()
    gender: EnumGender;

    @ApiProperty({
        example: '2023-12-26',
        description:
          'data de nascimento do usuário. Deve respeitar o formato estabelecido pela ISO 8601 (YYYY-MM-DD)',
      })
    @Expose()
    dateBirth: Date;
}