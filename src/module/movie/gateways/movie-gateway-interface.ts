import { CreateMovieDto } from "../dto/create-movie.dto";
import { FilterMovieDto } from "../dto/filter-movie.dto";
import { UpdateMovieDto } from "../dto/update-movie.dto";
import { Movie } from "../entities/movie.entity";

export interface MovieGatewayInterface{
    create(createMovieDto: CreateMovieDto): Promise<Movie>;
    findById(id: number): Promise<Movie>;
    findAll(filter: FilterMovieDto): Promise<[Movie[], number]>;
    removeById(id: number): Promise<void>;
    updateById(id: number, updateMovieDto: UpdateMovieDto): Promise<Movie>;
}