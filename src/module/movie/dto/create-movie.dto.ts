import { IsDate, IsEnum, IsNotEmpty, IsNumber, IsString, Min } from "class-validator";
import { EnumCategory } from "../enums/cateegory.enum";
import { Transform } from "class-transformer";
import * as moment from 'moment';
import { ApiProperty } from "@nestjs/swagger";

export class CreateMovieDto {

    @ApiProperty({
        example: 'Spider-Man no way home',
        description:
          'Título do filme',
    })
    @IsNotEmpty()
    @IsString()
    title: string;

    @ApiProperty({
        example: 'Chris McKenna',
        description:
          'Roterista do filme',
    })   
    @IsNotEmpty()
    @IsString()
    writer: string;

    @ApiProperty({
        example: 'A identidade do homem-aranha é revelada e agora ele luta para restaurar o seu anonimato, mas terá que cuidar de grandes responsabilidades',
        description:
          'Sinopse do filme',
    })  
    @IsNotEmpty()
    @IsString()
    plot: string;

    @ApiProperty({
        example: 'Action',
        description:
          'Categoria do filme',
    }) 
    @IsNotEmpty()
    @IsEnum(EnumCategory)
    category: EnumCategory;

    @ApiProperty({
        example: 'Marvel Studios',
        description:
          'Produtora do filme',
    }) 
    @IsNotEmpty()
    @IsString()
    productionCompany: string;

    @ApiProperty({
        example: '2021-12-16',
        description:
          'Data de lançamento',
    }) 
    @IsNotEmpty()
    @IsDate({message: `releaseDate must be a valid ISO 8601 date string`})
    @Transform(({value}) => moment(value).toDate())
    releaseDate: Date;

    @ApiProperty({
        example: 148,
        description:
          'Tempo de duração do filme em minutos',
    }) 
    @IsNotEmpty()
    @IsNumber({maxDecimalPlaces: 0})
    @Min(60)
    runningTime: number;
}
