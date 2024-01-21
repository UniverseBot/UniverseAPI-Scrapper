module.exports = function(Api) {
    return {
        Bing: {
            Model1: async (promt) => (await Api()).Get("v1/ai/microsoft/bing/model1", { promt }),
            Model2Image: async (url, promt) => (await Api()).Get("v1/ai/microsoft/bing/model2-img", { url, promt }),
        }
    }
};