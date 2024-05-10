import { Expose } from "class-transformer";
import { EnumGender } from "../enums/gender.enum";

export class User{
    @Expose()
    id: string;

    @Expose()
    name: string;

    @Expose()
    email: string;

    @Expose()
    password: string;

    @Expose()
    gender: EnumGender;

    @Expose()
    dateBirth: Date;
}