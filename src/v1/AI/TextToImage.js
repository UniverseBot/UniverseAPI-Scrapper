module.exports = function(Api) {
    return {
        Model1: async (prompt) => (await Api()).Get("v1/ai/text2img/model1", { prompt }),
        Model2: async (prompt) => (await Api()).Get("v1/ai/text2img/model2", { prompt }),
        Model3: async (prompt) => (await Api()).Get("v1/ai/text2img/model3", { prompt }),
        Model4: async (prompt) => (await Api()).Get("v1/ai/text2img/model4", { prompt }),
        Model5: async (prompt) => (await Api()).Get("v1/ai/text2img/model5", { prompt }),
        Model6: async (prompt) => (await Api()).Get("v1/ai/text2img/model6", { prompt }),
    }
};