import express from 'express';
import cors from "cors";
import config from "./config.json";
import { logger } from "./logging";
import api from "./routes/main";
import users from "./routes/users";
import bodyparser from "body-parser";
import database from "./database";
import ratelimit from "express-rate-limit";
import { ratelimiter } from "./helpers/ratelimiter/index";

const app = express();
const log = new logger();
const ratelimits = new ratelimiter()
const globalLimits = ratelimits.ratelimit({
    cooldown: 60 * 60 * 1000,
    max: 10,
})

const limiter = ratelimit({
    windowMs: 10 * 60 * 1000, 
    max: 5,
});

app.use(require("cors")());
app.use(
    cors({
        origin: ["http://localhost:8081", "http://localhost:8081/api/"],
        credentials: true
    })
);

app.use(limiter);
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use("/api", api, limiter);
app.use("/api/users", users);
app.use('/images', express.static('images'));

app.listen(config.port, () => log.success("API is online."));
database.connect()
log.success("Database connected.")
