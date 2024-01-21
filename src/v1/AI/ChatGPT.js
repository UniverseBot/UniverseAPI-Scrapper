module.exports = function(Api) {
    return {
        Model1: async (promt) => (await Api()).Get("v1/ai/chatgpt/model1", { promt }),
        Model2: async (promt) => (await Api()).Get("v1/ai/chatgpt/model2", { promt }),
        Model3: async (promt) => (await Api()).Get("v1/ai/chatgpt/model3", { promt }),
        Model4: async (promt) => (await Api()).Get("v1/ai/chatgpt/model4", { promt }),
        Model5: async (promt) => (await Api()).Get("v1/ai/chatgpt/model5", { promt }),
        Model6: async (promt) => (await Api()).Get("v1/ai/chatgpt/model6", { promt }),
        Model7Go: async (promt) => (await Api()).Get("v1/ai/chatgpt/model7-go", { promt }),
        Model8Promt: async (promt, text) => (await Api()).Get("v1/ai/chatgpt/model8-promt", { promt, text }),
        Model9v4: async (promt) => (await Api()).Get("v1/ai/chatgpt/model9-v4", { promt }),
        Model10v4: async (promt) => (await Api()).Get("v1/ai/chatgpt/model10-v4", { promt }),
        Model11Dalle: async (promt) => (await Api()).Get("v1/ai/chatgpt/model11-dalle", { promt }),
        Model12Turbo: async (promt) => (await Api()).Get("v1/ai/chatgpt/model12-turbo", { promt }),
        Model13Turbo: async (promt) => (await Api()).Get("v1/ai/chatgpt/model13-turbo", { promt }),
    }
};