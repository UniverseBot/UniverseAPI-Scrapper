module.exports = function(Api) {
    return {
        BING: {
            Text: async function(options) {
                const { version, prompt } = options;
    
                if (version === 1) return (await Api()).Get("v1/ai/microsoft/bing/text/model1", { prompt });
            },
            Image: async function(options) {
                const { version, url, prompt } = options;
    
                if (version === 1) return (await Api()).Get("v1/ai/microsoft/bing/image/model1", { url, prompt });
            },
        }
    }
};