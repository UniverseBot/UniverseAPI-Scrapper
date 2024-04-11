module.exports = function(Api) {
    return {
        Analysis: async function(options) {
            const { version, url } = options;

            if (version === 1) return (await Api()).Get("v1/download/facebook/model1", { url });
            if (version === 2) return (await Api()).Get("v1/download/facebook/model2", { url });
            if (version === 3) return (await Api()).Get("v1/download/facebook/model3", { url });
        }
    }
};