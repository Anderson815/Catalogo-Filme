import { IsDateString, IsEnum, IsNotEmpty, IsNumber, IsString, Min } from "class-validator";
import { EnumCategory } from "../enums/cateegory.enum";

export class CreateMovieDto {

    @IsNotEmpty()
    @IsString()
    title: string;

    @IsNotEmpty()
    @IsString()
    writer: string;

    @IsNotEmpty()
    @IsString()
    plot: string;

    @IsNotEmpty()
    @IsEnum(EnumCategory)
    category: EnumCategory;

    @IsNotEmpty()
    @IsString()
    productionCompany: string;

    @IsNotEmpty()
    @IsDateString()
    releaseDate: Date;

    @IsNotEmpty()
    @IsNumber({maxDecimalPlaces: 0})
    @Min(60)
    runningTime: number;
}
