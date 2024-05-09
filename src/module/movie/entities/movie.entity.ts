import { Expose, Transform } from "class-transformer";
import { EnumCategory } from "../enums/cateegory.enum";
import * as moment from 'moment';

export class Movie {
    @Expose()
    id: number;

    @Expose()
    title: string;

    @Expose()
    writer: string;

    @Expose()
    plot: string;

    @Expose()
    category: EnumCategory;

    @Expose()
    productionCompany: string;

    @Expose()
    releaseDate: Date;

    @Expose()
    runningTime: number;
}
