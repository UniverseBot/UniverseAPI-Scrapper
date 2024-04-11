module.exports = function(Api) {
    return {
        Generate: async function(options) {
            const { version, url } = options;

            if (version === 1) return (await Api()).Get("v1/ai/toanime/model1", { url });
        }
    }
};