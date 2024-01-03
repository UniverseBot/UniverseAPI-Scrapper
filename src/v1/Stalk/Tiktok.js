module.exports = function(Api) {
    return {
        Find: async (username) => (await Api()).get("v1/stalk/instagram/find", { username })
    }
};