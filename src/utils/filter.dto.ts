import { BadRequestException } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsBoolean, IsNumber, IsOptional, Min } from "class-validator";

export class FilterDto{

    @ApiProperty({
      example: 3,
      description:
        'Página desejada',
      default: 1,
      required: false
    })
    @IsOptional()
    @IsNumber()
    @Min(1)
    @Transform(({ value }) => parseInt(value))
    page: number = 1;

    @ApiProperty({
      example: 5,
      description:
        'Limite desejada de registro por página',
      default: 10,
      required: false
    })
    @IsOptional()
    @IsNumber()
    @Min(1)
    @Transform(({ value }) => parseInt(value))
    limit: number = 10;

    @ApiProperty({
      example: true,
      description:
        'Aplique a paginação. Se estiver como verdadeiro, serão considerados os parâmetros de página e limite informados; caso contrário, todos os registros do banco de dados serão retornados, onde a página será 1 e o limite será a quantidade de registros armazenados',
      default: true,
      required: false
    })
    @IsOptional()
    @IsBoolean()
    @Transform(({ value }) => {
      if (value === 'false') return false;
      else if(value === 'true') return true;
      else throw new BadRequestException(`pagination must be boolean`)
    })
    pagination: boolean = true;
}