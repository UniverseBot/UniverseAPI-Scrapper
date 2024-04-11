module.exports = function(Api) {
    return {
        Analysis: async function(options) {
            const { version, url } = options;

            if (version === 1) return (await Api()).Get("v1/detector/nsfw/model1", { url });
        }
    }
};