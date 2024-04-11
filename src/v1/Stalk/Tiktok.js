module.exports = function(Api) {
    return {
        Analysis: async function(options) {
            const { version, username } = options;

            if (version === 1) return (await Api()).Get("v1/stalk/tiktok/model1", { username });
            if (version === 2) return (await Api()).Get("v1/stalk/tiktok/model2", { username });
        }
    }
};