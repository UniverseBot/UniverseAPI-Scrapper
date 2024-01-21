module.exports = function(Api) {
    return {
        Gemini: {
            Pro: async (promt) => (await Api()).get("v1/ai/google/gemini/pro", { promt }),
            ProVisionModelAttach: async (image, promt) => (await Api()).post("v1/ai/google/gemini/pro-vision-attach", { image, promt }),
            ProVisionModelUrl: async (image, promt) => (await Api()).get("v1/ai/google/gemini/pro-vision-url", { image, promt })
        },
        Bard: {
            Model1: async (promt) => (await Api()).get("v1/ai/google/bard/model1", { promt }),
            Model2Image: async (url, promt) => (await Api()).get("v1/ai/google/bard/model2-img", { url, promt }),
        }
    }
};