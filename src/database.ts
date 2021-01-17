import config from "./config.json";
import { Client } from "pg";

const database = new Client({
    user: config.database.user,
    host: config.database.host,
    password: config.database.password,
    database: config.database.database
})

export = database