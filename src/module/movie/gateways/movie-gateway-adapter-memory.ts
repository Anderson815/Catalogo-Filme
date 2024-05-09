import { plainToClass } from "class-transformer";
import { CreateMovieDto } from "../dto/create-movie.dto";
import { Movie } from "../entities/movie.entity";
import { MovieGatewayInterface } from "./movie-gateway-interface";

export class MovieGatewayAdapterMemory implements MovieGatewayInterface{

    currentId: number;
    arrayMovies: Movie[];

    constructor(){
        this.currentId = 0;
        this.arrayMovies = []
    }

    async create(createMovieDto: CreateMovieDto): Promise<Movie>{
        const newMovie = plainToClass(Movie, createMovieDto, {excludeExtraneousValues: true, });
        this.currentId++;
        newMovie.id = this.currentId;
        this.arrayMovies.push(newMovie);
        return newMovie;
    }

    async findById(id: number): Promise<Movie> {
        const searchMovie = this.arrayMovies.find(movie => movie.id === id);
        return searchMovie;
    }

    async removeById(id: number): Promise<void> {
        this.arrayMovies.splice(--id, 1);
    }
}