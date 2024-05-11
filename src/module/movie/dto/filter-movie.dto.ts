import { IsEnum, IsOptional, IsString } from "class-validator";
import { FilterDto } from "src/utils/filter.dto";
import { EnumCategory } from "../enums/cateegory.enum";
import { ApiProperty } from "@nestjs/swagger";

export class FilterMovieDto extends FilterDto{

    @ApiProperty({
        example: '',
        description:
          'Um trecho do título do filme para pesquisa',
        required: false
    })
    @IsOptional()
    @IsString()
    title: string;

    @ApiProperty({
        example: 'Action',
        description:
          'Categoria de pesquisa',
        required: false
    })
    @IsOptional()
    @IsEnum(EnumCategory)
    category: EnumCategory;
}