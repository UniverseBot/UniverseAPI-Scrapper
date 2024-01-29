module.exports = function(Api) {
    return {
        Gemini: {
            Pro: async (prompt) => (await Api()).Get("v1/ai/google/gemini/pro", { prompt }),
            ProVisionModelAttach: async (image, prompt) => (await Api()).Post("v1/ai/google/gemini/pro-vision-attach", { image, prompt }),
            ProVisionModelUrl: async (image, prompt) => (await Api()).Get("v1/ai/google/gemini/pro-vision-url", { image, prompt })
        },
        Bard: {
            Model1: async (prompt) => (await Api()).Get("v1/ai/google/bard/model1", { prompt }),
            Model2Image: async (url, prompt) => (await Api()).Get("v1/ai/google/bard/model2-img", { url, prompt }),
        }
    }
};