module.exports = function(Api) {
    return {
        Video: {
            Analysis: async function(options) {
                const { version, url } = options;
    
                return (await Api()).Get(`v1/download/pinterest/model${version}`, { url });
            }
        }
    }
};