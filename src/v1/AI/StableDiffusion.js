module.exports = function(Api) {
    return {
        Model1: async (prompt) => (await Api()).Get("v1/ai/stablediffusion/model1", { prompt }),
    }
};