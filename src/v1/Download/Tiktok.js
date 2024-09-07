module.exports = function(Api) {
    return {
        Video: async function(options) {
            const { version, url } = options;

            return (await Api()).Get(`v1/download/tiktok/video/model${version}`, { url });
        },
        Audio: async function(options) {
            const { version, url } = options;

            return (await Api()).Get(`v1/download/tiktok/audio/model${version}`, { url });
        },
        Slide: async function(options) {
            const { version, url } = options;

            return (await Api()).Get(`v1/download/tiktok/slide/model${version}`, { url });
        },
    }
};