module.exports = function(Api) {
    return {
        Create: async () => (await Api()).Post("v1/tools/shorturl/create"),
        Delete: async (id) => (await Api()).Delete("v1/tools/shorturl/delete", { id }),
        Stats: async (id) => (await Api()).Get("v1/tools/shorturl/stats", { id }),
        Redirect: async (shortId) => (await Api()).Get(`redirect/${shortId}`),
    }
};