module.exports = function(Api) {
    return {
        Model1: async (username) => (await Api()).get("v1/stalk/twitter/model1", { username })
    }
};