module.exports = function(Api) {
    return {
        Model1: async (url) => (await Api()).get("v1/download/pinterest/model1", { url })
    }
};