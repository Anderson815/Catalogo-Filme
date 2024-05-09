import { Inject, Injectable } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { MovieGatewayInterface } from './gateways/movie-gateway-interface';

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

  findAll() {
    return `This action returns all movie`;
  }

  findOne(id: number) {
    return `This action returns a #${id} movie`;
  }

  update(id: number, updateMovieDto: UpdateMovieDto) {
    return `This action updates a #${id} movie`;
  }

  remove(id: number) {
    return `This action removes a #${id} movie`;
  }
}
