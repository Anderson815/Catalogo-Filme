import { IsEnum, IsOptional, IsString } from "class-validator";
import { FilterDto } from "src/utils/filter.dto";
import { EnumCategory } from "../enums/cateegory.enum";

export class FilterMovieDto extends FilterDto{

    @IsOptional()
    @IsString()
    title: string;

    @IsOptional()
    @IsEnum(EnumCategory)
    category: EnumCategory;
}