module.exports = function(Api) {
    return {
        Create: async () => (await Api()).Post("v1/tools/visitor/create"),
        Delete: async (id) => (await Api()).Delete("v1/tools/visitor/delete", { id }),
        Stats: async (id) => (await Api()).Get("v1/tools/visitor/stats", { id }),
        Hit: async (visitorId) => (await Api()).Get(`v1/tools/visitor/hit/${visitorId}`),
    }
};