module.exports = function(Api) {
    return {
        SFileMobiSearch: async (query) => (await Api()).Get("v1/download/file/sfilemobisearch", { query }),
        SFileMobi: async (url) => (await Api()).Get("v1/download/file/sfilemobi", { url }),
        ZippyShare: async (url) => (await Api()).Get("v1/download/file/zippyshare", { url }),
        MediaFire: async (url) => (await Api()).Get("v1/download/file/mediafire", { url }),
        Apkdl: async (url) => (await Api()).Get("v1/download/file/apkdl", { url }),
        GoogleDrive: async (url) => (await Api()).Get("v1/download/file/gdrive", { url }),
        Gore: async (url) => (await Api()).Get("v1/download/file/gore", { url })
    }
};