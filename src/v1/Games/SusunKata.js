module.exports = function(Api) {
    return {
        Main: async () => (await Api()).Get("v1/games/susunkata/")
    }
};