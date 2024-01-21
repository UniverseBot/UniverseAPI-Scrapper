module.exports = function(Api) {
    return {
        Find: async (query) => (await Api()).Get("v1/search/google/find", { query }),
        Image: async (query) => (await Api()).Get("v1/search/google/image", { query })
    }
};