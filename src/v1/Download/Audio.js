module.exports = function(Api) {
    return {
        SoundCloud: {
            Analysis: async function(options) {
                const { version, url } = options;
    
                if (version === 1) return (await Api()).Get("v1/download/audio/soundcloud1", { url });
                if (version === 2) return (await Api()).Get("v1/download/audio/soundcloud2", { url });
            }
        },
        Ringtone: {
            Analysis: async function(options) {
                const { version, query } = options;
    
                if (version === 1) return (await Api()).Get("v1/download/audio/ringtone", { query });
            }
        },
        Ntts: {
            Generate: async function(options) {
                const { version, text, language } = options;
    
                if (version === 1) return (await Api()).Get("v1/download/audio/soundoftext", { text, language });
            }
        },
        Joox: {
            Generate: async function(options) {
                const { version, query } = options;
    
                if (version === 1) return (await Api()).Get("v1/download/audio/joox", { query });
            }
        },
    }
};