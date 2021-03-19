const express = require("express");
const session = require("express-session");
const MemoryStore = require("memorystore")(session);
const helmet = require("helmet");
const Auth = require("./dist/auth");
const Request = require("./dist/request");

/**
 *
 * @param {Object} app
 * @param {Object} connection
 * @param {String} secret <optional>
 * @param {Boolean} https <optional>
 * @returns
 */
function auth(app, connection, secret, https) {
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use(helmet());
    const reqObj = new Request();
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
    return new Auth(connection, reqObj);
}

module.exports = auth;
