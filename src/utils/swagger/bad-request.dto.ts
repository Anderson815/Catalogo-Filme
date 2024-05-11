import { ApiProperty } from '@nestjs/swagger';

export class BadRequestExceptionDto {
  @ApiProperty({
    description:
      'Lista que informa os campos que devem ser ajustados informando o motivo, também pode ser apenas uma única mensagem. É retornado em inglês cada campo e seu motivo',
  })
  message: string | string[];

  @ApiProperty({
    description: 'Nome do erro de acordo com o protocolo HTTP',
  })
  error: string;

  @ApiProperty({
    description: 'Status numérico do erro de acordo com o protocolo HTTP',
  })
  statusCode: number;
}
