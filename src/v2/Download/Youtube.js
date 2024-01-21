module.exports = function(Api) {
    return {
        PlayMp3: async (query) => (await Api()).Get("v2/download/youtube/play-mp3", { query }),
        PlayMp4: async (query) => (await Api()).Get("v2/download/youtube/play-mp4", { query }),
        Mp3: async (url) => (await Api()).Get("v2/download/youtube/mp3", { url }),
        Mp4: async (url) => (await Api()).Get("v2/download/youtube/mp4", { url }),
        Short: async (url) => (await Api()).Get("v2/download/youtube/short", { url }),
    }
};