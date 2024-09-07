module.exports = function(Api) {
    return {
        Generate: async function(options) {
            const { version, prompt } = options;

            return (await Api()).Get(`v1/ai/stablediffusion/model${version}`, { prompt });
        }
    }
};