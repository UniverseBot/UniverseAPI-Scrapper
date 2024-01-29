module.exports = function(Api) {
    return {
        Model1: async (prompt) => (await Api()).Get("v1/ai/chatgpt/model1", { prompt }),
        Model2: async (prompt) => (await Api()).Get("v1/ai/chatgpt/model2", { prompt }),
        Model3: async (prompt) => (await Api()).Get("v1/ai/chatgpt/model3", { prompt }),
        Model4: async (prompt) => (await Api()).Get("v1/ai/chatgpt/model4", { prompt }),
        Model5: async (prompt) => (await Api()).Get("v1/ai/chatgpt/model5", { prompt }),
        Model6: async (prompt) => (await Api()).Get("v1/ai/chatgpt/model6", { prompt }),
        Model7Go: async (prompt) => (await Api()).Get("v1/ai/chatgpt/model7-go", { prompt }),
        Model8Prompt: async (prompt, text) => (await Api()).Get("v1/ai/chatgpt/model8-prompt", { prompt, text }),
        Model9v4: async (prompt) => (await Api()).Get("v1/ai/chatgpt/model9-v4", { prompt }),
        Model10v4: async (prompt) => (await Api()).Get("v1/ai/chatgpt/model10-v4", { prompt }),
        Model11Dalle: async (prompt) => (await Api()).Get("v1/ai/chatgpt/model11-dalle", { prompt }),
        Model12Turbo: async (prompt) => (await Api()).Get("v1/ai/chatgpt/model12-turbo", { prompt }),
        Model13Turbo: async (prompt) => (await Api()).Get("v1/ai/chatgpt/model13-turbo", { prompt }),
    }
};