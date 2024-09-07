module.exports = function(Api) {
    return {
        Analysis: async function(options) {
            const { version, url } = options;

            return (await Api()).Get(`v1/detector/nsfw/model${version}`, { url });
        }
    }
};