import { Injectable, Inject } from "@nestjs/common";
import { CreateMovieDto } from "../dto/create-movie.dto";
import { FilterMovieDto } from "../dto/filter-movie.dto";
import { UpdateMovieDto } from "../dto/update-movie.dto";
import { Movie } from "../entities/movie.entity";
import { MovieGatewayInterface } from "./movie-gateway-interface";
import { Like, Repository } from "typeorm";
import { MovieEntityTypeORM } from "../entities/movie-typeorm.entity";
import { plainToClass } from "class-transformer";
import { InjectRepository } from "@nestjs/typeorm";


@Injectable()
export class MovieGatewayAdapterTypeORM implements MovieGatewayInterface{

    constructor(
        @InjectRepository(MovieEntityTypeORM)
        private readonly repository: Repository<MovieEntityTypeORM>
    ){}

    async create(createMovieDto: CreateMovieDto): Promise<Movie> {        
        const newMovie = await this.repository.save(createMovieDto);
        const movieToResponse = plainToClass(Movie, newMovie);

        return movieToResponse
    }

    async findById(id: number): Promise<Movie> {
        const searchMovie = await this.repository.findOne({
            where: {
                id
            }
        })

        const movieToResponse = plainToClass(Movie, searchMovie);
        
        return movieToResponse;
    }
    
    async findAll(filter: FilterMovieDto): Promise<[Movie[], number]> {

        if(!filter.title)
            filter.title = "";

        const paginationToSelect = this.generatePaginationToSelect(filter);
   
        const [movieBd, count] = await this.repository.findAndCount({
            where: {
                category: filter.category,
                title: Like(`${filter.title}%`)
            },
            order: {
                    releaseDate: 'DESC'
            },
            ...paginationToSelect
        })

        const arrayMovieToResponse = movieBd.map(movie => plainToClass(Movie, movie))

        return [arrayMovieToResponse, count];
    }
    
    async removeById(id: number): Promise<void> {
        await this.repository.delete(id);
    }
    
    async updateById(id: number, updateMovieDto: UpdateMovieDto): Promise<Movie> {
        await this.repository.update(id, updateMovieDto);
        const movieToResponse = await this.findById(id);
        
        return movieToResponse;
    }

    private generatePaginationToSelect(filter: FilterMovieDto){
        
        let pagination = {};

        if(filter.pagination){
            Object.assign(pagination, {
                take: filter.limit, 
                skip: (filter.page - 1) * filter.limit
            });
        }

        return pagination;
    }

}