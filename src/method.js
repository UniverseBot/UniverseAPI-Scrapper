const axios = require("axios");
const FormData = require("form-data");

class API {
    constructor(baseURL, options) {
        this.URI = baseURL;
        this.token = options?.token || "";
        this.create = axios.create({
            baseURL: this.URI,
            timeout: 60000,
            headers: {
                Authorization: this.token ? `Bearer ${this.token}` : "",
            },
            ...options,
        });
    }

    setToken(token) {
        this.token = token;
        // Reset the Authorization header on the axios instance
        this.create.defaults.headers.Authorization = this.token ? `Bearer ${this.token}` : "";
    }

    async get(path = "/", query = {}, options = {}) {
        try {
            const res = await this.create.get(path, {
                params: new URLSearchParams({
                    ...query,
                }),
                ...options,
            });

            return res.data;
        } catch {
            return { status: 400 };
        }
    }

    async post(path = "", data = {}, options = {}) {
        try {
            if (!!data) {
                const form = new FormData();

                for (let key in data) {
                    let valueKey = data[key];
                    form.append(key, valueKey);
                }

                const res = await this.create.post(path, form, {
                    headers: {
                        ...form.getHeaders(),
                    },
                    ...options,
                });

                return res.data;
            } else {
                return { status: 400 };
            }
        } catch {
            return { status: 400 };
        }
    }

    async put(path = "", data = {}, options = {}) {
        try {
            if (!!data) {
                const res = await this.create.put(path, data, {
                    ...options,
                });

                return res.data;
            } else {
                return { status: 400 };
            }
        } catch {
            return { status: 400 };
        }
    }

    async delete(path = "", options = {}) {
        try {
            const res = await this.create.delete(path, {
                ...options,
            });

            return res.data;
        } catch {
            return { status: 400 };
        }
    }

    async patch(path = "", data = {}, options = {}) {
        try {
            if (!!data) {
                const res = await this.create.patch(path, data, {
                    ...options,
                });

                return res.data;
            } else {
                return { status: 400 };
            }
        } catch {
            return { status: 400 };
        }
    }

    async options(path = "", options = {}) {
        try {
            const res = await this.create.options(path, {
                ...options,
            });

            return res.data;
        } catch {
            return { status: 400 };
        }
    }
};

module.exports = { API };