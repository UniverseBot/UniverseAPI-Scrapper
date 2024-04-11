module.exports = function(Api) {
    return {
        Find: async (query) => (await Api()).Get("v1/images/wallpaper/find", { query }),
        Random: async (query) => (await Api()).Get("v1/images/wallpaper/random", { query })
    }
};