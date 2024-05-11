import { mixin } from '@nestjs/common';
import { ApiProperty, ApiPropertyOptions } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

type Constructor<T = {}> = new (...args: any[]) => T;

export function paginationSwagger<TBase extends Constructor>(
  Base: TBase
  // options?: ApiPropertyOptions | undefined,
) {
  class ResponseDTO {
    @ApiProperty({
      example: 3,
      description:
        'Página atual da resposta. É informado na requisição esse valor',
    })
    page: number;

    @ApiProperty({
      example: 5,
      description:
        'Número de itens selecionados para exibir. É informado na requisição esse valor',
    })
    limit: number;

    @ApiProperty({
      example: 11,
      description:
        'Número total de filmes existentes na aplicação inteira de acordo com o filtro',
    })
    totalItems: number;

    @ApiProperty({
      example: 3,
      description:
        'Número total páginas de acordo com o filtro considerando o limit',
    })
    totalPages: number;

    @ApiProperty({
      example: 1,
      description: 'Número total de filmes apresentados na página atual',
    })
    amountItemsCurrentPage: number;

    @ApiProperty({
      isArray: true,
      type: Base,
      // ...options,
    })
    @Type(() => Base)
    @ValidateNested({ each: true })
    resource: Array<InstanceType<TBase>>;
  }
  return mixin(ResponseDTO); // This is important otherwise you will get always the same instance
}
