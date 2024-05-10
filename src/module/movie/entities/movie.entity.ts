import { Expose } from "class-transformer";
import { EnumCategory } from "../enums/cateegory.enum";

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
