import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { EnumCategory } from "../enums/cateegory.enum";

@Entity({name: 'TB_MOVIE'})
export class MovieEntityTypeORM {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    writer: string;

    @Column()
    plot: string;

    @Column()
    category: EnumCategory;

    @Column()
    productionCompany: string;

    @Column()
    releaseDate: Date;

    @Column()
    runningTime: number;
}