module.exports = function(Api) {
    return {
        Video: {
            Analysis: async function(options) {
                const { version, url } = options;
    
                if (version === 1) return (await Api()).Get("v1/download/pinterest/model1", { url });
                if (version === 2) return (await Api()).Get("v1/download/pinterest/model2", { url });
            }
        }
    }
};