module.exports = function(Api) {
    return {
        SoundCloud1: async (url) => (await Api()).get("v1/download/audio/soundcloud1", { url }),
        SoundCloud2: async (url) => (await Api()).get("v1/download/audio/soundcloud2", { url }),
        Ringtone: async (query) => (await Api()).get("v1/download/audio/ringtone", { query }),
        SoundOfText: async (text, language) => (await Api()).get("v1/download/audio/soundoftext", { text, language }),
        Joox: async (query) => (await Api()).get("v1/download/audio/joox", { query })
    }
};