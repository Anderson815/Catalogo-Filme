import { IsDate, IsEnum, IsNotEmpty, IsNumber, IsString, Min } from "class-validator";
import { EnumCategory } from "../enums/cateegory.enum";
import { Transform } from "class-transformer";
import * as moment from 'moment';

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
    @IsDate({message: `releaseDate must be a valid ISO 8601 date string`})
    @Transform(({value}) => moment(value).toDate())
    releaseDate: Date;

    @IsNotEmpty()
    @IsNumber({maxDecimalPlaces: 0})
    @Min(60)
    runningTime: number;
}
