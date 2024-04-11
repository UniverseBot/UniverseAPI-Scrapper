module.exports = function(Api) {
    return {
        Generate: async function(options) {
            const { version, prompt } = options;

            if (version === 1) return (await Api()).Get("v1/ai/text2img/model1", { prompt });
            if (version === 2) return (await Api()).Get("v1/ai/text2img/model2", { prompt });
            if (version === 3) return (await Api()).Get("v1/ai/text2img/model3", { prompt });
            if (version === 4) return (await Api()).Get("v1/ai/text2img/model4", { prompt });
            if (version === 5) return (await Api()).Get("v1/ai/text2img/model5", { prompt });
            if (version === 6) return (await Api()).Get("v1/ai/text2img/model6", { prompt });
            if (version === 7) return (await Api()).Get("v1/ai/text2img/model7", { prompt });
        }
    }
};