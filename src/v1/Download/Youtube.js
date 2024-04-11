module.exports = function(Api) {
    return {
        Video: {
            Analysis: async function(options) {
                const { version, url } = options;
    
                if (version === 1) (await Api()).Get("v1/download/youtube/mp4", { url });
            }
        },
        Audio: {
            Analysis: async function(options) {
                const { version, url } = options;
    
                if (version === 1) (await Api()).Get("v1/download/youtube/mp3", { url });
            }
        },
        Play: {
            Analysis: async function(options) {
                const { version, query } = options;
    
                if (version === 1) (await Api()).Get("v1/download/youtube/play", { query });
            }
        },
    }
};