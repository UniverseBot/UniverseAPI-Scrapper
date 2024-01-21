module.exports = function(Api) {
    return {
        Model1: async (url) => (await Api()).Get("v1/ai/toanime/model1", { url }),
    }
};