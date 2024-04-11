module.exports = function(Api) {
    return {
        Find: async (query) => (await Api()).Get("v1/images/pinterest/find", { query }),
        RandomCouple: async () => (await Api()).Get("v1/images/pinterest/random-couple")
    }
};