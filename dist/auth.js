const Model = require("./model");
const hash = require("./hash");

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
    async login(cb) {
        const { req } = this.reqObj.getRequest();
        const { username, password } = req.body;
        const userId = await this.query.getUserId(username);
        const hashedPass = await this.query.getPassword(userId);
        if (hash.compareHash(hashedPass, password)) {
            cb();
        } else {
            cb(new Error("Invalid Credentials"));
        }
    }

    /**
     *
     * @param {*} cb
     */
    logout(cb) {
        const { req } = this.reqObj.getRequest();
        req.session.destroy();
        cb();
    }

    /**
     *
     * @param {*} cb
     */
    register(cb) {
        const { req } = this.reqObj.getRequest();
        const { username, email, password } = req.body;
        try {
            await this.query.registerUser(username, email, password);
            cb();
        } catch(err) {
            // check error is username already exists or if email already exists
            console.log(err)
        }
    }

    /**
     *
     */
    getSession() {
        const { req } = this.reqObj.getRequest();
        return req.session;
    }

    /**
     *
     * @param {*} key
     */
    getSessionVar(key) {
        const { req } = this.reqObj.getRequest();
        return req.session[key];
    }

    /**
     *
     * @param {*} key
     * @param {*} value
     */
    addSessionVar(key, value) {
        const { req } = this.reqObj.getRequest();
        req.session[key] = value;
    }

    /**
     *
     * @param {*} key
     * @param {*} value
     */
    updateSessionVar(key, value) {
        const { req } = this.reqObj.getRequest();
        req.session[key] = value;
    }

    /**
     *
     * @param {*} key
     */
    deleteSessionVar(key) {
        const { req } = this.reqObj.getRequest();
        delete req.session[key];
    }
}

module.exports = Auth;
