module.exports = function(Api) {
    return {
        GPT: {
            Text: async function(options) {
                const { model, version, prompt } = options;

                if (model === "gpt3") {
                    return (await Api()).Get(`v1/ai/openai/gpt3/model${version}`, { prompt });
                }
                if (model === "gpt3.5") {
                    return (await Api()).Get(`v1/ai/openai/gpt3.5/model${version}`, { prompt });
                }
                if (model === "gpt3.5-turbo") {
                    return (await Api()).Get(`v1/ai/openai/gpt3.5-turbo/model${version}`, { prompt });
                }
                if (model === "gpt4") {
                    return (await Api()).Get(`v1/ai/openai/gpt4/model${version}`, { prompt });
                }
            }
        },
        DALLE: {
            Generate: async function(options) {
                const { model, version, prompt } = options;

                if (model === "dalle-2") {
                    return (await Api()).Get(`v1/ai/openai/dall-e-2/model${version}`, { prompt });
                }
            }
        },
        Davinci: {
            Generate: async function(options) {
                const { version, prompt } = options;

                return (await Api()).Get(`v1/ai/openai/davinci/model${version}`, { prompt });
            }
        },
        Babbage: {
            Text: async function(options) {
                const { version, prompt } = options;

                return (await Api()).Get(`v1/ai/openai/babbage/model${version}`, { prompt });
            }
        },
        ADA: {
            Text: async function(options) {
                const { version, prompt } = options;

                return (await Api()).Get(`v1/ai/openai/ada/model${version}`, { prompt });
            }
        },
        Curie: {
            Text: async function(options) {
                const { version, prompt } = options;

                return (await Api()).Get(`v1/ai/openai/curie/model${version}`, { prompt });
            }
        },
    }
};