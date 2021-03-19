const patterns = require("./patterns");

class Model {
    constructor(connection) {
        this.connection = connection;
        this.build();
    }

    /**
     *
     * @param {*} userId
     * @returns
     */
    getUsername(userId) {
        return new Promise((resolve, reject) => {
            this.connection.query(
                "SELECT username FROM auth WHERE user_id = ?",
                [userId],
                (err) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(results[0].username);
                    }
                }
            );
        });
    }

    /**
     *
     * @param {*} userId
     * @param {*} username
     * @returns
     */
    setUsername(userId, username) {
        return new Promise((resolve, reject) => {
            this.connection.query(
                "UPDATE auth SET username = ? WHERE user_id = ?",
                [password, username],
                (err) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve();
                    }
                }
            );
        });
    }

    /**
     *
     * @param {*} userId
     * @returns
     */
    getEmail(userId) {
        return new Promise((resolve, reject) => {
            this.connection.query(
                "SELECT email FROM auth WHERE user_id = ?",
                [userId],
                (err) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(results[0].email);
                    }
                }
            );
        });
    }

    /**
     *
     * @param {*} userId
     * @param {*} email
     * @returns
     */
    setEmail(userId, email) {
        return new Promise((resolve, reject) => {
            this.connection.query(
                "UPDATE auth SET email = ? WHERE user_id = ?",
                [email, userId],
                (err) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve();
                    }
                }
            );
        });
    }

    /**
     *
     * @param {*} userId
     * @returns
     */
    getPassword(userId) {
        return new Promise((resolve, reject) => {
            this.connection.query(
                "SELECT password FROM auth WHERE user_id = ?",
                [userId],
                (err) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(results[0].password);
                    }
                }
            );
        });
    }

    /**
     *
     * @param {*} userID
     * @param {*} password
     * @returns
     */
    setPassword(userId, password) {
        return new Promise((resolve, reject) => {
            this.connection.query(
                "UPDATE auth SET password = ? WHERE user_id = ?",
                [password, userId],
                (err) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve();
                    }
                }
            );
        });
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
    build() {
        this.connection.query(
            "CREATE TABLE auth (user_id int(11) PRIMARY KEY NOT NULL AUTO_INCREMENT, username text NOT NULL, email text NOT NULL, password text NOT NULL)"
        );
    }
}

module.exports = Model;
