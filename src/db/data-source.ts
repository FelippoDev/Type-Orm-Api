import { DataSource } from 'typeorm';
import dotenv from 'dotenv';
dotenv.config();

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.TYPEORM_HOST,
    port: Number(process.env.TYPEORM_PORT),
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    synchronize: true,
    migrationsRun: false,
    logging: true,
    entities: [__dirname + '/entities/*.ts'],
    subscribers: [],
    migrations: [__dirname + '/migrations/*.ts'],
})


