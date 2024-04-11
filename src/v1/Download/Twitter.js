module.exports = function(Api) {
    return {
        Analysis: async function(options) {
            const { version, url } = options;

            if (version === 1) return (await Api()).Get("v1/download/twitter/model1", { url });
            if (version === 2) return (await Api()).Get("v1/download/twitter/model2", { url });
            if (version === 3) return (await Api()).Get("v1/download/twitter/model3", { url });
        }
    }
};