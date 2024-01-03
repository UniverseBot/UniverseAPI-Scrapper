module.exports = function(Api) {
    return {
        Find: async (query) => (await Api()).get("v1/image/pinterest/find", { query }),
        RandomCouple: async () => (await Api()).get("v1/image/pinterest/random-couple")
    }
};