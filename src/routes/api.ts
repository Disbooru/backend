import Router from "express-promise-router"
import config from "../config.json";
import { logger } from "../logging";

const log = new logger();
const router = Router();

export default router

router.get("/users/login", function (req, res) {
    if (!req.query.auth) {
        return res.status(401).end()
    };
    if (req.query.auth.toLowerCase() !== config.auth.toLowerCase()) {
        return res.status(401).end()
    };

    log.info(`Login request for ${req.query.name}`)
    // database.query(`SELECT * FROM test_users WHERE ${req.query.type} = $1`, [req.query.name], (err, response) => {
    //     console.log("Checking")
    //     if (response.rows[0])
    //     {
    //         if (response.rows[0]['password'] === req.query.password)
    //         {
    //             console.log("It works.")
    //             res.json(response.rows[0])
    //             return res.status(200).end()
    //         }
    //         console.log("Failed")
    //         return res.status(401).end()
    //     }
    //     console.log("No rows")
    //     return res.status(401).end()
    // })
})


router.post("/users/create", function (req, res) {
    if (!req.query.auth) {
        return res.status(401).end()
    };
    if (req.query.auth.toLowerCase() !== config.auth.toLowerCase()) {
        return res.status(401).end()
    };

    res.json(req.query);
    // database.query("INSERT INTO test_users(name,password,email,id) VALUES($1,$2,$3,$4)", [req.query.name, req.query.password, req.query.email, req.query.id], (err, res) => {
    //     console.log(err, res)
    // });
    console.info("Created user with the name " + "'" + req.query.name + "'");
})

router.post("/users/delete", function (req, res) {
    if (!req.query.auth) {
        return res.status(401).end()
    };
    if (req.query.auth.toLowerCase() !== config.auth.toLowerCase()) {
        return res.status(401).end()
    };
    if (!req.query.password) {
        return res.status(401).end()
    }

    // database.query("SELECT * FROM test_users WHERE id = $1", [req.query.id], (err, response) => {
    //     console.log(response)
    //     if (response.rows[0])
    //     {
    //         if (response.rows[0].password == req.query.password)
    //         {
    //             database.query("DELETE FROM test_users WHERE id = $1", [req.query.id], (err, res) => {
    //                 console.log(err, res)
    //             });
    //             console.info("Deleted user with the id " + "'" + req.query.id + "'");
    //             return res.status(200).end()
    //         }
    //         return res.status(401).end()
    //     }
    //     return res.status(401).end()
    // })

})

router.post("/images/create", function (req, res) {
    if (!req.query.auth) {
        return res.status(401).end()
    };
    if (req.query.auth.toLowerCase() !== config.auth.toLowerCase()) {
        return res.status(401).end()
    };

    console.log(req)
    // database.query("INSERT INTO posts(author,title,id) VALUES($1,$2,$3)", [req.query.author, req.query.title, req.query.id], (err, response) => {
    //     console.log(err)
    //     //return res.status(403).end()
    // });
});

router.get("/post/:id", function (req, res) {
    if (!req.query.auth) {
        return res.status(401).end()
    };
    if (req.query.auth.toLowerCase() !== config.auth.toLowerCase()) {
        return res.status(401).end()
    };


    // database.query("SELECT * FROM posts WHERE id = $1", [req.params['id']], (err, response) => {
    //     console.log(err)
    //     res.json(response.rows[0])
    // });
});

router.delete("/images/delete", function (req, res) {
    if (!req.query.auth) {
        return res.status(401).end()
    };
    if (req.query.auth.toLowerCase() !== config.auth.toLowerCase()) {
        return res.status(401).end()
    };

    // database.query("DELETE FROM posts WHERE id = $1", [req.query.id], (err, response) => {
    //     console.log(err)
    //     return res.status(403).end()
    // });
    return res.status(201).end()
});
