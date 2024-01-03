module.exports = function(Api) {
    return {
        Model1: async (url) => (await Api()).get("v1/download/tiktok/model1", { url }),
        Model2: async (url) => (await Api()).get("v1/download/tiktok/model2", { url }),
        Model3: async (url) => (await Api()).get("v1/download/tiktok/model3", { url }),
        Model4: async (url) => (await Api()).get("v1/download/tiktok/model4", { url }),
        Model5: async (url) => (await Api()).get("v1/download/tiktok/model5", { url }),
        Model6Music: async (url) => (await Api()).get("v1/download/tiktok/model6-music", { url })
    }
};