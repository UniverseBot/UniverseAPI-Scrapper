module.exports = function(Api) {
    return {
        XNXX: async (url) => (await Api()).get("v1/download/porn/xnxx", { url }),
        XVideos: async (url) => (await Api()).get("v1/download/porn/xvideos", { url })
    }
};