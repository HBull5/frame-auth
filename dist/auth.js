const Model = require("./model");
const hash = require("./hash");
const patterns = require("./patterns");

class Auth {
    constructor(connection, reqObj) {
        this.query = new Model(connection);
        this.reqObj = reqObj;
    }

    /**
     *
     * @param {*} cb
     */
    protected(cb) {
        const { req } = this.reqObj.getRequest();
        if (!this.req.session.userId) {
            cb(new Error("User Not Authenticated"));
        } else {
            cb();
        }
    }

    /**
     *
     * @param {*} cb
     */
    login(cb) {
        const { req } = this.reqObj.getRequest();
        const { username, password } = req.body;
    }

    /**
     *
     * @param {*} cb
     */
    logout(cb) {}

    /**
     *
     * @param {*} cb
     */
    register(cb) {}

    /**
     *
     */
    getSession() {}

    /**
     *
     * @param {*} key
     */
    getSessionVar(key) {}

    /**
     *
     * @param {*} key
     * @param {*} value
     */
    addSessionVar(key, value) {}

    /**
     *
     * @param {*} key
     * @param {*} value
     */
    updateSessionVar(key, value) {}

    /**
     *
     * @param {*} key
     */
    deleteSessionVar(key) {}
}

module.exports = Auth;
