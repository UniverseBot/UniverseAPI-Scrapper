module.exports = function(Api) {
    return {
        Reels: {
            Analysis: async function(options) {
                const { version, url } = options;
    
                return (await Api()).Get(`v1/download/instagram/reels/model${version}`, { url });
            },
        },
        Stories: {
            Analysis: async function(options) {
                const { version, username } = options;
    
                return (await Api()).Get(`v1/download/instagram/stories/model${version}`, { username });
            }
        }
    }
};