module.exports = function(Api) {
    return {
        Find: async (query) => (await Api()).get("v1/image/wallpaper/find", { query }),
        Random: async (query) => (await Api()).get("v1/image/wallpaper/random", { query })
    }
};