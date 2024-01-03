module.exports = function(Api) {
    return {
        Main: async () => (await Api()).get("v1/game/susunkata/")
    }
};