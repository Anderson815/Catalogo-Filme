import { CreateMovieDto } from "../dto/create-movie.dto";
import { Movie } from "../entities/movie.entity";

export interface MovieGatewayInterface{
    create(createMovieDto: CreateMovieDto): Promise<Movie>;
    findById(id: number): Promise<Movie>;
}