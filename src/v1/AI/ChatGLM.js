module.exports = function(Api) {
    return {
        Text: async function(options) {
            const { version, prompt } = options;

            return (await Api()).Get(`v1/ai/chatglm/model${version}`, { prompt });
        }
    }
};