const hash = require("./hash");
const mysql = require("mysql");

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
        return new Promise((resolve, reject) => {});
    }

    /**
     *
     */
    build() {}
}

module.exports = Model;
