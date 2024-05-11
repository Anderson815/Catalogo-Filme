import * as dotenv from "dotenv";

dotenv.config();
export const configBD = {
    host: process.env.BD_HOST,
    port: Number(process.env.BD_PORT),
    username: process.env.BD_USERNAME,
    password: process.env.BD_PASSWORD,
    database: process.env.BD_DATABASE,
}