const Axios = require("axios");
const FormData = require("form-data");

class Method {
    constructor(baseURL, options) {
        this.URI = baseURL;
        this.token = options?.token || "";
    }

    setToken(token) {
        this.token = token;
    }

    async createRequest(method, path = "", data = null, options = {}) {
        const headers = {
            Authorization: this.token ? `Bearer ${this.token}` : "",
            ...options.headers,
        };

        try {
            const getResponse = await Axios({
                method,
                url: `${this.URI}/${path}`,
                headers,
                params: method === "GET" ? data : undefined,
                data: method !== "GET" && !(data instanceof FormData) ? data : undefined,
                ...(data instanceof FormData
                    ? { headers: { ...headers, ...data.getHeaders() } }
                    : {}),
                ...options,
            });

            return getResponse.data;
        } catch (error) {
            if (error && error.response) {
                return error.response.data;
            } else {
                return {
                    status: false,
                    code: 500,
                    speed: "0ms",
                    author: "@GXD",
                    message: error.message || "An unknown error occurred",
                    data: null
                }
            }
        }
    }

    async Get(path = "/", query = {}, options = {}) {
        return this.createRequest("GET", path, query, options);
    }

    async Post(path = "", data = {}, options = {}) {
        return this.createRequest("POST", path, data, options);
    }

    async Put(path = "", data = {}, options = {}) {
        return this.createRequest("PUT", path, data, options);
    }

    async Delete(path = "", options = {}) {
        return this.createRequest("DELETE", path, null, options);
    }

    async Patch(path = "", data = {}, options = {}) {
        return this.createRequest("PATCH", path, data, options);
    }

    async Options(path = "", options = {}) {
        return this.createRequest("OPTIONS", path, null, options);
    }
}

module.exports = { Method };