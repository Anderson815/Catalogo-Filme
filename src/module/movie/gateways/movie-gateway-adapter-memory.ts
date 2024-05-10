import { plainToClass } from "class-transformer";
import { CreateMovieDto } from "../dto/create-movie.dto";
import { Movie } from "../entities/movie.entity";
import { MovieGatewayInterface } from "./movie-gateway-interface";
import { FilterMovieDto } from "../dto/filter-movie.dto";

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
    
    async findAll(filter: FilterMovieDto): Promise<[Movie[], number]> {
        let resource: Movie[] = []
        const pageToBd = filter.page - 1;

        if(filter.pagination){
            const startIndex = pageToBd * filter.limit;
            const endIndex = (pageToBd * filter.limit) + filter.limit;

            resource = this.arrayMovies.slice(startIndex, endIndex);
        }else{
            resource = this.arrayMovies;
        }

        return [resource, this.arrayMovies.length];
    }

    async removeById(id: number): Promise<void> {
        this.arrayMovies.splice(--id, 1);
    }
}