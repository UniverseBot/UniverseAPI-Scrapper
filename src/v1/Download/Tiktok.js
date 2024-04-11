module.exports = function(Api) {
    return {
        Analysis: async function(options) {
            const { version, url } = options;

            if (version === 1) return (await Api()).Get("v1/download/tiktok/model1", { url });
            if (version === 2) return (await Api()).Get("v1/download/tiktok/model2", { url });
            if (version === 3) return (await Api()).Get("v1/download/tiktok/model3", { url });
            if (version === 4) return (await Api()).Get("v1/download/tiktok/model4", { url });
            if (version === 5) return (await Api()).Get("v1/download/tiktok/model5", { url });
            if (version === 6) return (await Api()).Get("v1/download/tiktok/model6", { url });
            if (version === 7) return (await Api()).Get("v1/download/tiktok/model7", { url });
            if (version === 8) return (await Api()).Get("v1/download/tiktok/model8", { url });
            if (version === 9) return (await Api()).Get("v1/download/tiktok/model9-music", { url });
            if (version === 10) return (await Api()).Get("v1/download/tiktok/model10-slide", { url });
        }
    }
};