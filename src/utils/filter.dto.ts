import { Transform } from "class-transformer";
import { IsBoolean, IsNumber, IsOptional, Min } from "class-validator";

export class FilterDto{

    @IsOptional()
    @IsNumber()
    @Min(1)
    @Transform(({ value }) => parseInt(value))
    page: number = 1;

    @IsOptional()
    @IsNumber()
    @Min(1)
    @Transform(({ value }) => parseInt(value))
    limit: number = 10;

    @IsOptional()
    @IsBoolean()
    @Transform(({ value }) => {
      if (value === 'true') return true;
      else return false;
    })
    pagination: boolean = false;
}