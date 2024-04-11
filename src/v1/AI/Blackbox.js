module.exports = function(Api) {
    return {
        Text: async function(options) {
            const { version, prompt } = options;

            if (version === 1) return (await Api()).Get("v1/ai/blackbox/model1", { prompt });
            if (version === 2) return (await Api()).Get("v1/ai/blackbox/model2", { prompt });
        }
    }
};