import { Controller, Get, Post, Body, Param, Delete, HttpStatus, HttpCode, Query, ParseIntPipe, Put, UseGuards } from '@nestjs/common';
import { MovieService } from './movie.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { FilterMovieDto } from './dto/filter-movie.dto';
import { AuthGuard } from 'src/guards/authguard/authguard.guard';
import { ApiOperation, ApiResponse, ApiTags, ApiParam, ApiBody } from '@nestjs/swagger';
import { BadRequestExceptionDto } from 'src/utils/swagger/bad-request.dto';
import { Movie } from './entities/movie.entity';
import { paginationSwagger } from 'src/utils/swagger/pagination-swagger';


@ApiTags('Filmes da aplicação')
@Controller('movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @ApiOperation({
    summary: 'Cadastro de filme',
  })
  @ApiResponse({
    status: 201,
    description: 'Cadastro do usuário foi realizado com sucesso',
    type: Movie
  })
  @ApiResponse({
    status: 400,
    description:
      'Body incorreto, alguma propriedade foi passada de forma incorreta, o campo (ou os campos) que deve ser ajustado será informado no body de retorno',
    type: BadRequestExceptionDto,
  })
  @ApiResponse({
    status: 403,
    description:
      'Token inválido, expirado ou não informado',
    type: BadRequestExceptionDto,
  })
  @Post()
  @UseGuards(AuthGuard)
  create(@Body() createMovieDto: CreateMovieDto) {
    return this.movieService.create(createMovieDto);
  }

  @ApiOperation({
    summary: 'Obter lista de filmes paginado, podendo utilizar filtros de busca (título do filme e/ou categoria)',
  })
  @ApiResponse({
    status: 200,
    description: 'Busca da lista de filmes foi realizado com sucesso',
    type: paginationSwagger(Movie)
  })
  @ApiResponse({
    status: 400,
    description:
      'Query incorreta, alguma propriedade foi passada de forma incorreta, o campo (ou os campos) que deve ser ajustado será informado no body de retorno',
    type: BadRequestExceptionDto,
  })
  @ApiResponse({
    status: 403,
    description:
      'Token inválido, expirado ou não informado',
    type: BadRequestExceptionDto,
  })
  @Get()
  @UseGuards(AuthGuard)
  findAll(@Query() filter: FilterMovieDto) {
    return this.movieService.findAll(filter);
  }

  @ApiOperation({
    summary: 'Obter um filmes com base no id informado',
  })
  @ApiResponse({
    status: 200,
    description: 'Filme com base no id foi obtido com sucesso',
    type: Movie
  })
  @ApiResponse({
    status: 400,
    description:
      'Query incorreta, alguma propriedade foi passada de forma incorreta, o campo (ou os campos) que deve ser ajustado será informado no body de retorno',
    type: BadRequestExceptionDto,
  })
  @ApiResponse({
    status: 403,
    description:
      'Token inválido, expirado ou não informado',
    type: BadRequestExceptionDto,
  })
  @ApiResponse({
    status: 404,
    description:
      'Filme com o id informado não foi encontrado',
    type: BadRequestExceptionDto,
  })
  @ApiParam({
    name: 'id',
    description: 'id do filme',
    required: true,
    example: 1,
  })
  @Get(':id')
  @UseGuards(AuthGuard)
  findOne(@Param('id', new ParseIntPipe()) id: number) {
    return this.movieService.findOne(id);
  }

  @ApiOperation({
    summary: 'Atualizar o registro de um filmes com base no id informado',
  })
  @ApiResponse({
    status: 200,
    description: 'O filme com o id informado foi atualizado com sucesso',
    type: Movie
  })
  @ApiResponse({
    status: 400,
    description:
      'Body incorreto, alguma propriedade foi passada de forma incorreta, o campo (ou os campos) que deve ser ajustado será informado no body de retorno',
    type: BadRequestExceptionDto,
  })
  @ApiResponse({
    status: 403,
    description:
      'Token inválido, expirado ou não informado',
    type: BadRequestExceptionDto,
  })
  @ApiResponse({
    status: 404,
    description:
      'Filme com o id informado não foi encontrado',
    type: BadRequestExceptionDto,
  })
  @ApiParam({
    name: 'id',
    description: 'id do filme',
    required: true,
    example: 1,
  })
  @ApiBody({type: UpdateMovieDto})
  @Put(':id')
  @UseGuards(AuthGuard)
  update(@Param('id', new ParseIntPipe()) id: number, @Body() updateMovieDto: UpdateMovieDto) {
    return this.movieService.update(id, updateMovieDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id', new ParseIntPipe()) id: number) {
    return this.movieService.remove(id);
  }
}
