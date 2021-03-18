class Request {
    constructor() {
        this.req = null;
        this.res = null;
    }

    /**
     *
     * @param {*} req
     * @param {*} res
     */
    setRequest(req, res) {
        this.req = req;
        this.res = res;
    }

    /**
     *
     * @returns
     */
    getRequest() {
        return { ...this };
    }
}

module.exports = Request;
