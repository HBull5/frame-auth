const patterns = require("./patterns");

class Model {
    constructor(connection) {
        this.connection = connection;
    }

    /**
     *
     * @param {*} userId
     * @returns
     */
    getUsername(userId) {
        return new Promise((resolve, reject) => {});
    }

    /**
     *
     * @param {*} userId
     * @param {*} username
     * @returns
     */
    setUsername(userId, username) {
        return new Promise((resolve, reject) => {});
    }

    /**
     *
     * @param {*} userId
     * @returns
     */
    getEmail(userId) {
        return new Promise((resolve, reject) => {});
    }

    /**
     *
     * @param {*} userId
     * @param {*} email
     * @returns
     */
    setEmail(userId, email) {
        return new Promise((resolve, reject) => {});
    }

    /**
     *
     * @param {*} userId
     * @returns
     */
    getPassword(userId) {
        return new Promise((resolve, reject) => {});
    }

    /**
     *
     * @param {*} userID
     * @param {*} password
     * @returns
     */
    setPassword(userID, password) {
        return new Promise((resolve, reject) => {});
    }

    /**
     *
     * @param {*} identity
     * @returns
     */
    getUserId(identity) {
        return new Promise((resolve, reject) => {
            const idType = patterns.email.test(identity) ? "email" : "username";
            this.connection.query(
                "SELECT user_id FROM auth WHERE ? = ?",
                [idType, identity],
                (err) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(results[0].user_id);
                    }
                }
            );
        });
    }

    /**
     *
     */
    build() {}
}

module.exports = Model;
