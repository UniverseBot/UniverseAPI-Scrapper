module.exports = function(Api) {
    return {
        Generate: async function(options) {
            const { version, url } = options;

            return (await Api()).Get(`v1/ai/toanime/model${version}`, { url });
        }
    }
};