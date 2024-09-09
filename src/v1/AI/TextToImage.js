module.exports = function(Api) {
    return {
        Generate: async function(options) {
            const { model, version, prompt } = options;

            if (model && model.length > 0) {
                return (await Api()).Get(`v1/ai/text2img/model${version}`, { prompt, model });
            } else {
                return (await Api()).Get(`v1/ai/text2img/model${version}`, { prompt });
            }
        }
    }
};