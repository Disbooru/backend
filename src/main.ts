import express from 'express';
import cors from "cors";
import config from "./config.json";
import { logger } from "./logging";
import api from "./routes/main";
import bodyparser from "body-parser";
import database from "./database";

const app = express();
const log = new logger();

app.use(require("cors")());
app.use(
    cors({
        origin: ["http://localhost:8081", "http://localhost:8081/api/"],
        credentials: true
    })
);

app.use("/api", api);
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.listen(config.port, () => log.success("API is online."));
database.connect()
log.success("Database connected.")
