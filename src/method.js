const FormData = require("form-data");
const Axios = require("axios");

class API {
    constructor(baseURL, options) {
        this.URI = baseURL;
        this.token = options?.token || "";
        this.create = Axios.create({
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
            return {
                status: false,
                code: 500,
                message: "Oops! Cosmic glitch detected. We're on a quick space-time fix. Be right back! 🌌🚀 #500ErrorVoyage",
                data: null
            };
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
                return {
                    status: false,
                    code: 500,
                    message: "Oops! Cosmic glitch detected. We're on a quick space-time fix. Be right back! 🌌🚀 #500ErrorVoyage",
                    data: null
                };
            }
        } catch {
            return {
                status: false,
                code: 500,
                message: "Oops! Cosmic glitch detected. We're on a quick space-time fix. Be right back! 🌌🚀 #500ErrorVoyage",
                data: null
            };
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
                return {
                    status: false,
                    code: 500,
                    message: "Oops! Cosmic glitch detected. We're on a quick space-time fix. Be right back! 🌌🚀 #500ErrorVoyage",
                    data: null
                };
            }
        } catch {
            return {
                status: false,
                code: 500,
                message: "Oops! Cosmic glitch detected. We're on a quick space-time fix. Be right back! 🌌🚀 #500ErrorVoyage",
                data: null
            };
        }
    }

    async delete(path = "", options = {}) {
        try {
            const res = await this.create.delete(path, {
                ...options,
            });

            return res.data;
        } catch {
            return {
                status: false,
                code: 500,
                message: "Oops! Cosmic glitch detected. We're on a quick space-time fix. Be right back! 🌌🚀 #500ErrorVoyage",
                data: null
            };
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
                return {
                    status: false,
                    code: 500,
                    message: "Oops! Cosmic glitch detected. We're on a quick space-time fix. Be right back! 🌌🚀 #500ErrorVoyage",
                    data: null
                };
            }
        } catch {
            return {
                status: false,
                code: 500,
                message: "Oops! Cosmic glitch detected. We're on a quick space-time fix. Be right back! 🌌🚀 #500ErrorVoyage",
                data: null
            };
        }
    }

    async options(path = "", options = {}) {
        try {
            const res = await this.create.options(path, {
                ...options,
            });

            return res.data;
        } catch {
            return {
                status: false,
                code: 500,
                message: "Oops! Cosmic glitch detected. We're on a quick space-time fix. Be right back! 🌌🚀 #500ErrorVoyage",
                data: null
            };
        }
    }
};

module.exports = { API };