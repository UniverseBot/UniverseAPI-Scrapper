module.exports = function(Api) {
    return {
        BING: {
            Text: async function(options) {
                const { version, prompt } = options;
    
                return (await Api()).Get(`v1/ai/microsoft/bing/text/model${version}`, { prompt });
            },
            Image: async function(options) {
                const { version, url, prompt } = options;
    
                return (await Api()).Get(`v1/ai/microsoft/bing/image/model${version}`, { url, prompt });
            },
        }
    }
};