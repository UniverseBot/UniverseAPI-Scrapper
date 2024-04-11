module.exports = function(Api) {
    return {
        Analysis: async function(options) {
            const { version, username } = options;

            if (version === 1) return (await Api()).Get("v1/stalk/twitter/model1", { username });
        }
    }
};