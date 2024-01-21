module.exports = function(Api) {
    return {
        Model1: async (promt) => (await Api()).get("v1/ai/text2img/model1", { promt }),
        Model2: async (promt) => (await Api()).get("v1/ai/text2img/model2", { promt }),
        Model3: async (promt) => (await Api()).get("v1/ai/text2img/model3", { promt }),
        Model4: async (promt) => (await Api()).get("v1/ai/text2img/model4", { promt }),
        Model5: async (promt) => (await Api()).get("v1/ai/text2img/model5", { promt }),
        Model6: async (promt) => (await Api()).get("v1/ai/text2img/model6", { promt }),
    }
};