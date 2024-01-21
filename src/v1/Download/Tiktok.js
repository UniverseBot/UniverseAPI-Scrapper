module.exports = function(Api) {
    return {
        Model1: async (url) => (await Api()).Get("v1/download/tiktok/model1", { url }),
        Model2: async (url) => (await Api()).Get("v1/download/tiktok/model2", { url }),
        Model3: async (url) => (await Api()).Get("v1/download/tiktok/model3", { url }),
        Model4: async (url) => (await Api()).Get("v1/download/tiktok/model4", { url }),
        Model5: async (url) => (await Api()).Get("v1/download/tiktok/model5", { url }),
        Model6: async (url) => (await Api()).Get("v1/download/tiktok/model6", { url }),
        Model7: async (url) => (await Api()).Get("v1/download/tiktok/model7", { url }),
        Model8: async (url) => (await Api()).Get("v1/download/tiktok/model8", { url }),
        Model9Music: async (url) => (await Api()).Get("v1/download/tiktok/model9-music", { url }),
        Model10Slide: async (url) => (await Api()).Get("v1/download/tiktok/model10-slide", { url })
    }
};