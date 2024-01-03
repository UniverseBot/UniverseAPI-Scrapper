module.exports = function(Api) {
    return {
        Model1: async (url) => (await Api()).get("v1/download/twitter/model1", { url }),
        Model2: async (url) => (await Api()).get("v1/download/twitter/model2", { url })
    }
};