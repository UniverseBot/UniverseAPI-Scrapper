module.exports = function(Api) {
    return {
        Pinterest: async (url) => (await Api()).Get("v1/download/aio/pinterest", { url }),
        IFunny: async (url) => (await Api()).Get("v1/download/aio/ifunny", { url }),
        ImDB: async (url) => (await Api()).Get("v1/download/aio/imdb", { url }),
        Cocofun: async (url) => (await Api()).Get("v1/download/aio/cocofun", { url }),
        LineSticker: async (url) => (await Api()).Get("v1/download/aio/line-sticker", { url })
    }
};