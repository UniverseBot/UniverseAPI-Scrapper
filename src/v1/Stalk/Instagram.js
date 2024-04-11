module.exports = function(Api) {
    return {
        Analysis: async function(options) {
            const { version, username } = options;

            if (version === 1) return (await Api()).Get("v1/stalk/instagram/model1", { username });
            if (version === 2) return (await Api()).Get("v1/stalk/instagram/model2", { username });
            if (version === 3) return (await Api()).Get("v1/stalk/instagram/model3", { username });
        }
    }
};