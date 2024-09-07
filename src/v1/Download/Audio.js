module.exports = function(Api) {
    return {
        SoundCloud: {
            Analysis: async function(options) {
                const { version, url } = options;
    
                return (await Api()).Get(`v1/download/audio/soundcloud${version}`, { url });
            }
        },
        Ringtone: {
            Analysis: async function(options) {
                const { version, query } = options;
    
                return (await Api()).Get(`v1/download/audio/ringtone`, { query });
            }
        },
        Ntts: {
            Generate: async function(options) {
                const { version, text, language } = options;
    
                return (await Api()).Get(`v1/download/audio/soundoftext`, { text, language });
            }
        },
        Joox: {
            Generate: async function(options) {
                const { version, query } = options;
    
                return (await Api()).Get(`v1/download/audio/joox`, { query });
            }
        },
    }
};