module.exports = function(Api) {
    return {
        Bing: {
            Model1: async (prompt) => (await Api()).Get("v1/ai/microsoft/bing/model1", { prompt }),
            Model2Image: async (url, prompt) => (await Api()).Get("v1/ai/microsoft/bing/model2-img", { url, prompt }),
        }
    }
};