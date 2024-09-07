module.exports = function(Api) {
    return {
        GoogleDrive: {
            Analysis: async function(options) {
                const { version, url } = options;
    
                return (await Api()).Get(`v1/download/file/gdrive`, { url });
            }
        },
        MediaFire: {
            Analysis: async function(options) {
                const { version, url } = options;
    
                return (await Api()).Get(`v1/download/file/mediafire`, { url });
            }
        },
        SFileMobiSearch: {
            Analysis: async function(options) {
                const { version, query } = options;
    
                return (await Api()).Get(`v1/download/file/sfilemobisearch`, { query });
            }
        },
        SFileMobiDownload: {
            Analysis: async function(options) {
                const { version, url } = options;
    
                return (await Api()).Get(`v1/download/file/sfilemobi`, { url });
            }
        },
        APKDL: {
            Analysis: async function(options) {
                const { version, url } = options;
    
                return (await Api()).Get(`v1/download/file/apkdl`, { url });
            }
        },
        Gore: {
            Analysis: async function(options) {
                const { version, url } = options;
    
                return (await Api()).Get(`v1/download/file/gore`, { url });
            }
        },
        ZippyShare: {
            Analysis: async function(options) {
                const { version, url } = options;
    
                return (await Api()).Get(`v1/download/file/zippyshare_deprecated`, { url });
            }
        }
    }
};