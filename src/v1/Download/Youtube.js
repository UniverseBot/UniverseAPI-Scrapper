module.exports = function(Api) {
    return {
        Video: async function(options) {
            const { version, url } = options;
    
            return (await Api()).Get(`v1/download/youtube/mp4/model${version}`, { url });
        },
        Audio: async function(options) {
            const { version, url } = options;
    
            return (await Api()).Get(`v1/download/youtube/mp3/model${version}`, { url });
        },
        Play: async function(options) {
            const { version, query } = options;
    
            return (await Api()).Get(`v1/download/youtube/play/model${version}`, { query });
        },
    }
};