module.exports = function(Api) {
    return {
        XNXX: {
            Analysis: async function(options) {
                const { version, url } = options;
    
                return (await Api()).Get(`v1/download/porn/xnxx`, { url });
            }
        },
        XVideos: {
            Analysis: async function(options) {
                const { version, url } = options;
    
                return (await Api()).Get(`v1/download/porn/xvideos`, { url });
            }
        }
    }
};