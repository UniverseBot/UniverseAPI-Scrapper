module.exports = function(Api) {
    return {
        GPT: {
            Text: async function(options) {
                const { model, version, prompt } = options;

                if (model === "gpt3.5-turbo") {
                    if (version === 1) return (await Api()).Get("v1/ai/openai/gpt3.5-turbo/model1", { prompt });
                    if (version === 2) return (await Api()).Get("v1/ai/openai/gpt3.5-turbo/model2", { prompt });
                    if (version === 3) return (await Api()).Get("v1/ai/openai/gpt3.5-turbo/model3", { prompt });
                    if (version === 4) return (await Api()).Get("v1/ai/openai/gpt3.5-turbo/model4", { prompt });
                    if (version === 5) return (await Api()).Get("v1/ai/openai/gpt3.5-turbo/model5", { prompt });
                    if (version === 6) return (await Api()).Get("v1/ai/openai/gpt3.5-turbo/model6", { prompt });
                    if (version === 7) return (await Api()).Get("v1/ai/openai/gpt3.5-turbo/model7", { prompt });
                    if (version === 8) return (await Api()).Get("v1/ai/openai/gpt3.5-turbo/model8", { prompt });
                }
                if (model === "gpt4") {
                    if (version === 1) return (await Api()).Get("v1/ai/openai/gpt4/model1", { prompt });
                    if (version === 2) return (await Api()).Get("v1/ai/openai/gpt4/model2", { prompt });
                    if (version === 3) return (await Api()).Get("v1/ai/openai/gpt4/model3", { prompt });
                }
            }
        },
        DALLE: {
            Generate: async function(options) {
                const { model, version, prompt } = options;

                if (model === "dalle-2") {
                    if (version === 1) return (await Api()).Get("v1/ai/openai/dall-e-2/model1", { prompt });
                    if (version === 2) return (await Api()).Get("v1/ai/openai/dall-e-2/model2", { prompt });
                }
            }
        }
    }
};