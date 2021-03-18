const bcrypt = require("bcrypt");

class Hash {
    /**
     *
     * @param {*} string
     * @returns
     */
    static hash(string) {
        return new Promise((resolve, reject) => {
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(string, salt, (err, hash) => {
                    if (err) {
                        console.log(err);
                    } else {
                        resolve(hash);
                    }
                });
            });
        });
    }

    /**
     *
     * @param {*} hash
     * @param {*} string
     * @returns
     */
    static compareHash(hash, string) {
        return new Promise((resolve, reject) => {
            bcrypt.compare(string, hash, (err, result) => {
                if (err) {
                    console.log(err);
                } else {
                    resolve(result);
                }
            });
        });
    }
}

module.exports = Hash;
