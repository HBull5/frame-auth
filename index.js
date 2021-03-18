const express = require("express");
const session = require("express-session");
const MemoryStore = require("memorystore")(session);
const helmet = require("helmet");
const Request = require("./dist/request");
const reqObj = new Request();

/**
 *
 * @param {*} app
 * @param {*} connection
 */
function auth(app, connection) {
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use(helmet());
    app.use((req, res, next) => {
        reqObj.setRequest(req, res);
        next();
    });
    app.use(
        session({
            secret: secret || "secret",
            resave: false,
            saveUninitialized: true,
            cookie: { secure: https || false },
            store: new MemoryStore({
                checkPeriod: 86400000,
            }),
        })
    );
}

module.exports = auth;
