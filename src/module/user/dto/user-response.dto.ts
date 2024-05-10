import { Expose, Exclude } from "class-transformer";
import { EnumGender } from "../enums/gender.enum";

export class UserResponse{
    @Expose()
    id: string;

    @Expose()
    name: string;

    @Exclude()
    email: string;

    @Exclude()
    password: string;

    @Expose()
    gender: EnumGender;

    @Expose()
    dateBirth: Date;
}