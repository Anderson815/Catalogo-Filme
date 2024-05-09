import { plainToClass } from "class-transformer";
import { CreateMovieDto } from "../dto/create-movie.dto";
import { Movie } from "../entities/movie.entity";
import { MovieGatewayInterface } from "./movie-gateway-interface";

export class MovieGatewayAdapterMemory implements MovieGatewayInterface{

    arrayMovies: Movie[] = [];

    async create(createMovieDto: CreateMovieDto): Promise<Movie>{
        const newMovie = plainToClass(Movie, createMovieDto, {excludeExtraneousValues: true, });
        newMovie.id = this.arrayMovies.length + 1;
        this.arrayMovies.push(newMovie);
        return newMovie;
    }

    async findById(id: number): Promise<Movie> {
        const searchMovie = this.arrayMovies.find(movie => movie.id === id);
        return searchMovie;
    }
}