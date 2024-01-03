module.exports = function(Api) {
    return {
        Pro: async (promt) => (await Api()).get("v1/ai/gemini/pro", { promt }),
        ProVisionModelAttach: async (image, promt) => (await Api()).get("v1/ai/gemini/pro-vision-attach", { image, promt }),
        ProVisionModelUrl: async (image, promt) => (await Api()).get("v1/ai/gemini/pro-vision-url", { image, promt })
    }
};