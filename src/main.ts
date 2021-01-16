import express from 'express';
import cors from "cors";
import config from "./config.json";
import { logger } from "./logging";
import api from "./routes/api";

const app = express();
const log = new logger()

app.use(cors());
app.listen(config.port, () => log.success("API is online."))
app.use("/api", api)

app.use(
    cors({
        origin: ["http://localhost:8081", "http://localhost:8081/api/"],
        credentials: true
    })
);
