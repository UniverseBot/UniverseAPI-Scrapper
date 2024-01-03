module.exports = function(Api) {
    return {
        Model1: async (url) => (await Api()).get("v1/download/instagram/model1", { url }),
        Model2: async (url) => (await Api()).get("v1/download/instagram/model2", { url }),
        Model3: async (url) => (await Api()).get("v1/download/instagram/model3", { url }),
        Model4TV: async (url) => (await Api()).get("v1/download/instagram/model4-tv", { url }),
        Model5Stories: async (username) => (await Api()).get("v1/download/instagram/model5-stories", { username })
    }
};