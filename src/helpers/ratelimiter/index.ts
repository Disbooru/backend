
export class ratelimiter {
    
    public ratelimit(options) {
        options = Object.assign(
            {
                cooldown: 5 * 60 * 1000,
                max: 10,
                message: "You're making the paint brushes work too fast! Slow down...",
                status: 429,
                sendHeaders: true,
                howToHandle: function (req, res) {res.status(options.status).send(options.message);},
                onLimitReached: function () {},
            },
            options
        );
    };
};