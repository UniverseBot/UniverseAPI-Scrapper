module.exports = function(Api) {
    return {
        Model1: async (prompt) => (await Api()).Get("v1/ai/blackbox/model1", { prompt }),
        Model2v4: async (prompt) => (await Api()).Get("v1/ai/blackbox/model2-v4", { prompt }),
    }
};