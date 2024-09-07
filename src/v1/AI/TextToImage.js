module.exports = function(Api) {
    return {
        Generate: async function(options) {
            const { version, prompt } = options;

            return (await Api()).Get(`v1/ai/text2img/model${version}`, { prompt });
        }
    }
};