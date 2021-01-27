import config from "../config.json";
import { logger } from "../logging";
import express from 'express';

const log = new logger();

interface AuthInterface {
    check(res, req);
};

export class authorization implements AuthInterface{

    public check(req,res){
        if (!req.headers){
            return res.status(401).end()
        };
        if (!req.headers['authorization']){
            return res.status(401).end()
        };
        if (req.headers['authorization'] !== config.auth){
            log.danger(`Unauthorized api access detected on [${req.route.stack[0].method}] ${req.route.path}`)
            return res.status(401).end()
        };
    };
    // note: add generating and stuff like that for user tokens.
};