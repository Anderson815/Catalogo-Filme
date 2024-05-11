import { Controller, Get, Post, Body, Param, Delete, HttpStatus, HttpCode, Query, ParseIntPipe, Put, UseGuards } from '@nestjs/common';
import { MovieService } from './movie.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { FilterMovieDto } from './dto/filter-movie.dto';
import { AuthGuard } from 'src/guards/authguard/authguard.guard';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { BadRequestExceptionDto } from 'src/utils/swagger/bad-request.dto';
import { Movie } from './entities/movie.entity';


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
  @Post()
  @UseGuards(AuthGuard)
  create(@Body() createMovieDto: CreateMovieDto) {
    return this.movieService.create(createMovieDto);
  }

  @Get()
  @UseGuards(AuthGuard)
  findAll(@Query() filter: FilterMovieDto) {
    return this.movieService.findAll(filter);
  }

  @Get(':id')
  @UseGuards(AuthGuard)
  findOne(@Param('id', new ParseIntPipe()) id: number) {
    return this.movieService.findOne(id);
  }

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
