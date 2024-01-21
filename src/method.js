const FormData = require("form-data");
const got = require("got");

class Method {
    constructor(baseURL, options) {
        this.URI = baseURL;
        this.token = options?.token || "";
    }

    setToken(token) {
        this.token = token;
    }

    async request(method, path = "", data = null, options = {}) {
        const headers = {
            Authorization: this.token ? `Bearer ${this.token}` : "",
            ...options.headers,
        };

        try {
            const response = await got[method](`${this.URI}${path}`, {
                method,
                headers,
                searchParams: data,
                body: data instanceof FormData ? data : undefined,
                ...options,
            });

            return JSON.parse(response.body);
        } catch (error) {
            return error;
        }
    }

    async get(path = "/", query = {}, options = {}) {
        return this.request("get", path, query, options);
    }

    async post(path = "", data = {}, options = {}) {
        if (data instanceof FormData) {
            // If data is FormData, send as FormData
            const res = await this.create.post(path, data, {
                headers: {
                    ...form.getHeaders(),
                    ...options.headers,
                },
                ...options,
            });
            return res.data;
        } else {
            // If data is not FormData, send as JSON
            const res = await this.create.post(path, data, {
                ...options,
            });
            return res.data;
        }
    }

    async put(path = "", data = {}, options = {}) {
        return this.request("put", path, data, options);
    }

    async delete(path = "", options = {}) {
        return this.request("delete", path, null, options);
    }

    async patch(path = "", data = {}, options = {}) {
        return this.request("patch", path, data, options);
    }

    async options(path = "", options = {}) {
        return this.request("options", path, null, options);
    }
}

module.exports = { Method };