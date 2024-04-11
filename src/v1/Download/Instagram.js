module.exports = function(Api) {
    return {
        Reels: {
            Analysis: async function(options) {
                const { version, url } = options;
    
                if (version === 1) return (await Api()).Get("v1/download/instagram/model1", { url });
                if (version === 2) return (await Api()).Get("v1/download/instagram/model2", { url });
                if (version === 3) return (await Api()).Get("v1/download/instagram/model3", { url });
                if (version === 4) return (await Api()).Get("v1/download/instagram/model4", { url });
                if (version === 5) return (await Api()).Get("v1/download/instagram/model5-tv", { url });
            },
        },
        Stories: {
            Analysis: async function(options) {
                const { version, username } = options;
    
                if (version === 1) return  (await Api()).Get("v1/download/instagram/model6-stories", { username });
            }
        }
    }
};