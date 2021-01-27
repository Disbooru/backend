import { logger } from "../logging";
const log = new logger();

const poggersAreLoggers = function(req,res){
    log.warn(`Request on [${req.method}] ${req.url}\nAuth Header: ${req.headers['authorization']}`)
}

export default poggersAreLoggers