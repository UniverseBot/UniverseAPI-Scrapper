module.exports = function(Api) {
    return {
        User: async (username) => (await Api()).get("v1/stalk/github/user", { username }),
        Repository: async (query) => (await Api()).get("v1/stalk/github/repository", { query })
    }
};