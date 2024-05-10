import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { MovieGatewayInterface } from './gateways/movie-gateway-interface';
import { FilterMovieDto } from './dto/filter-movie.dto';
import { Pagination } from 'src/utils/pagination.dto';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MovieService {

  constructor(
    @Inject('MovieGatewayBD')
    private movieGateway: MovieGatewayInterface
  ){}

  async create(createMovieDto: CreateMovieDto) {
    const newMovie = await this.movieGateway.create(createMovieDto);
    return newMovie;
  }

  async findAll(filter: FilterMovieDto) {
    const elements = await this.movieGateway.findAll(filter);
    const pagination = new Pagination<Movie>(filter, elements[1], elements[0]);
    return pagination;
  }

  async findOne(id: number) {
    const searchMovie = await this.movieGateway.findById(id);

    if(!searchMovie)
      throw new NotFoundException(`Movie not found`);

    return searchMovie;
  }

  update(id: number, updateMovieDto: UpdateMovieDto) {
    return `This action updates a #${id} movie`;
  }

  async remove(id: number) {
    await this.findOne(id);
    await this.movieGateway.removeById(id);
  }
}
