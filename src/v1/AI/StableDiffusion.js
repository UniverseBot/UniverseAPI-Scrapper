module.exports = function(Api) {
    return {
        Model1: async (promt) => (await Api()).Get("v1/ai/stablediffusion/model1", { promt }),
    }
};