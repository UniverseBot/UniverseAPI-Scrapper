module.exports = function(Api) {
    return {
        Generate: async function(options) {
            const { version, prompt } = options;

            if (version === 1) return (await Api()).Get("v1/ai/stablediffusion/model1", { prompt });
        }
    }
};