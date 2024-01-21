module.exports = function(Api) {
    return {
        Play: async (query) => (await Api()).Get("v1/download/youtube/play", { query }),
        MP3: async (url) => (await Api()).Get("v1/download/youtube/mp3", { url }),
        MP4: async (url) => (await Api()).Get("v1/download/youtube/mp4", { url })
    }
};