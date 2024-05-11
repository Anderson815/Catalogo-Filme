import { Expose } from "class-transformer";
import { EnumCategory } from "../enums/cateegory.enum";
import { ApiProperty } from "@nestjs/swagger";

export class Movie {
    @ApiProperty({
        example: 1,
        description:
          'Id do usuário que será cadastrado',
    })
    @Expose()
    id: number;

    @ApiProperty({
        example: 'Spider-Man no way home',
        description:
          'Título do filme',
    })
    @Expose()
    title: string;

    @ApiProperty({
        example: 'Chris McKenna',
        description:
          'Roterista do filme',
    })    
    @Expose()
    writer: string;

    @ApiProperty({
        example: 'A identidade do homem-aranha é revelada e agora ele luta para restaurar o seu anonimato, mas terá que cuidar de grandes responsabilidades',
        description:
          'Sinopse do filme',
    })  
    @Expose()
    plot: string;

    @ApiProperty({
        example: 'Action',
        description:
          'Categoria do filme',
    })  
    @Expose()
    category: EnumCategory;

    @ApiProperty({
        example: 'Marvel Studios',
        description:
          'Produtora do filme',
    }) 
    @Expose()
    productionCompany: string;

    @ApiProperty({
        example: '2021-12-16',
        description:
          'Data de lançamento',
    }) 
    @Expose()
    releaseDate: Date;

    @ApiProperty({
        example: 148,
        description:
          'Tempo de duração do filme em minutos',
    }) 
    @Expose()
    runningTime: number;
}
