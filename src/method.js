const axios = require("axios");
const FormData = require("form-data");

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
            const response = await axios({
                method,
                url: `${this.URI}${path}`,
                headers,
                params: method === "GET" ? data : undefined,
                data: method !== "GET" && !(data instanceof FormData) ? data : undefined,
                ...(data instanceof FormData
                    ? { headers: { ...headers, ...data.getHeaders() } }
                    : {}),
                ...options,
            });

            return response.data;
        } catch (error) {
            return error;
        }
    }

    async Get(path = "/", query = {}, options = {}) {
        return this.request("GET", path, query, options);
    }

    async Post(path = "", data = {}, options = {}) {
        return this.request("POST", path, data, options);
    }

    async Put(path = "", data = {}, options = {}) {
        return this.request("PUT", path, data, options);
    }

    async Delete(path = "", options = {}) {
        return this.request("DELETE", path, null, options);
    }

    async Patch(path = "", data = {}, options = {}) {
        return this.request("PATCH", path, data, options);
    }

    async Options(path = "", options = {}) {
        return this.request("OPTIONS", path, null, options);
    }
}

module.exports = { Method };