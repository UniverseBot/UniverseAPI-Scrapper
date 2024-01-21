module.exports = function(Api) {
    return {
        Model1: async (username) => (await Api()).Get("v1/stalk/tiktok/model1", { username }),
        Model2: async (username) => (await Api()).Get("v1/stalk/tiktok/model2", { username })
    }
};