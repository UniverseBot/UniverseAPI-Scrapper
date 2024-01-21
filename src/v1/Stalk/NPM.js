module.exports = function(Api) {
    return {
        Find: async (query) => (await Api()).Get("v1/stalk/npm/find", { query })
    }
};