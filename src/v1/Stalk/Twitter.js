module.exports = function(Api) {
    return {
        Model1: async (username) => (await Api()).Get("v1/stalk/twitter/model1", { username })
    }
};