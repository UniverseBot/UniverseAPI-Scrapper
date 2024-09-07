module.exports = function(Api) {
    return {
        Analysis: async function(options) {
            const { version, username } = options;

            return (await Api()).Get(`v1/stalk/instagram/model${version}`, { username });
        }
    }
};