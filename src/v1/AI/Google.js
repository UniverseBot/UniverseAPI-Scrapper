module.exports = function(Api) {
    return {
        Gemini: {
            Text: async function(options) {
                const { model, version, prompt } = options;

                if (model === "1.0-pro") {
                    if (version === 1) return (await Api()).Get("v1/ai/google/gemini/1.0-pro/text/model1", { prompt });
                    if (version === 2) return (await Api()).Get("v1/ai/google/gemini/1.0-pro/text/model2", { prompt });
                    if (version === 3) return (await Api()).Get("v1/ai/google/gemini/1.0-pro/text/model3", { prompt });
                }
            },
            Vision: async function(options) {
                const { model, type, version, image, prompt } = options;

                if (model === "1.0-pro" && type === "attacment") {
                    if (version === 1) return (await Api()).Post("v1/ai/google/gemini/1.1-pro/vision/attach/model1_deprecated", { image, prompt });
                }
                if (model === "1.0-pro" && type === "url") {
                    if (version === 1) return (await Api()).Get("v1/ai/google/gemini/1.1-pro/vision/url/model1_deprecated", { image, prompt });
                }
            },
        },
        Bard: {
            Text: async function(options) {
                const { version, prompt } = options;

                if (version === 1) return (await Api()).Get("v1/ai/google/bard/text/model1_deprecated", { prompt });
            },
        },
    }
};