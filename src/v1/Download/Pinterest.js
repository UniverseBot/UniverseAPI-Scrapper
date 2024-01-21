module.exports = function(Api) {
    return {
        Model1: async (url) => (await Api()).Get("v1/download/pinterest/model1", { url })
    }
};