import color from 'colorts';

interface LogInterface {
    info(message: string);
    warn(message: string);
    success(message: string);
    danger(message: string);
}

export class logger implements LogInterface {

    public info(msg: string) {
        const time = new Date()
        console.log(`\x1B[33m[${time.getUTCHours()}:${time.getUTCMinutes()}:${time.getUTCSeconds()}] \x1B[39m` + `\x1B[37m[ info ] \x1B[39m` + `\x1B[36m${msg}\x1B[39m`)
    }
    public warn(msg: string) {
        const time = new Date()
        console.log(`\x1B[33m[${time.getUTCHours()}:${time.getUTCMinutes()}:${time.getUTCSeconds()}] \x1B[39m` + `\x1B[35m[ warn ] \x1B[39m` + `\x1B[36m${msg}\x1B[39m`)
    }
    public success(msg: string) {
        const time = new Date()
        console.log(`\x1B[33m[${time.getUTCHours()}:${time.getUTCMinutes()}:${time.getUTCSeconds()}] \x1B[39m` + `\x1B[32m[ success ] \x1B[39m` + `\x1B[36m${msg}\x1B[39m`)
    }
    public danger(msg: string) {
        const time = new Date()
        console.log(`\x1B[33m[${time.getUTCHours()}:${time.getUTCMinutes()}:${time.getUTCSeconds()}] \x1B[39m` + `\x1B[31m[ danger ] \x1B[39m` + `\x1B[36m${msg}\x1B[39m`)
    }

}