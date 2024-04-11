module.exports = function(Api) {
    return {
        Analysis: async function(options) {
            const { model, url } = options;

            if (model === "IFunny") return (await Api()).Get("v1/download/aio/ifunny", { url });
            if (model === "ImDB") return (await Api()).Get("v1/download/aio/imdb", { url });
            if (model === "Cocofun") return (await Api()).Get("v1/download/aio/cocofun", { url });
            if (model === "LineSticker") return (await Api()).Get("v1/download/aio/line-sticker", { url });
        }
    }
};