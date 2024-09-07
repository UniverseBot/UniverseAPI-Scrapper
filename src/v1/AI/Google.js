module.exports = function(Api) {
    return {
        Gemini: {
            Text: async function(options) {
                const { model, version, prompt } = options;

                if (model === "1.0-pro") {
                    return (await Api()).Get(`v1/ai/google/gemini/1.0-pro/text/model${version}`, { prompt });
                }
                if (model === "1.5-pro") {
                    return (await Api()).Get(`v1/ai/google/gemini/1.5-pro/text/model${version}`, { prompt });
                }
            },
            Vision: async function(options) {
                const { model, type, version, image, prompt } = options;

                if (model === "1.0-pro" && type === "attacment") {
                    return (await Api()).Post(`v1/ai/google/gemini/1.1-pro/vision/attach/model${version}_deprecated`, { image, prompt });
                }
                if (model === "1.0-pro" && type === "url") {
                    return (await Api()).Get(`v1/ai/google/gemini/1.1-pro/vision/url/model${version}_deprecated`, { image, prompt });
                }
            },
        },
        Bard: {
            Text: async function(options) {
                const { version, prompt } = options;

                return (await Api()).Get(`v1/ai/google/bard/text/model${version}`, { prompt });
            },
        },
        Gemma: {
            Text: async function(options) {
                const { version, prompt } = options;

                return (await Api()).Get(`v1/ai/google/gemma/model${version}`, { prompt });
            },
        },
    }
};