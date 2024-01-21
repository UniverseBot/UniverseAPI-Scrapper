module.exports = function(Api) {
    return {
        Model1: async (url) => (await Api()).Get("v1/download/twitter/model1", { url }),
        Model2: async (url) => (await Api()).Get("v1/download/twitter/model2", { url }),
        Model3: async (url) => (await Api()).Get("v1/download/twitter/model3", { url })
    }
};