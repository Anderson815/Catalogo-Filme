import { Column, PrimaryGeneratedColumn, Entity } from "typeorm";
import { EnumGender } from "../enums/gender.enum";

@Entity({name: "TB_USER"})
export class UserEntityTypeORM{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    gender: EnumGender;

    @Column()
    dateBirth: Date;
}