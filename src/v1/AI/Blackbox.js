module.exports = function(Api) {
    return {
        Model1: async (promt) => (await Api()).get("v1/ai/blackbox/model1", { promt }),
        Model2v4: async (promt) => (await Api()).get("v1/ai/blackbox/model2-v4", { promt }),
    }
};