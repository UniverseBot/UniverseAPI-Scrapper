module.exports = function(Api) {
    return {
        RANDOM: {
            Generate: async function(options) {
                const { model, image } = options;
    
                if (model === "Attach") return (await Api()).Post("v1/images/remini/attach", { image });
                if (model === "Url") return (await Api()).Get("v1/images/remini/url", { image });
            }
        },
        HDR: {
            Generate: async function(options) {
                const { model, image } = options;
    
                if (model === "Attach") return (await Api()).Post("v1/images/remini/hdr/attach", { image });
                if (model === "Url") return (await Api()).Get("v1/images/remini/hdr/url", { image });
            }
        },
        RECOLOR: {
            Generate: async function(options) {
                const { model, image } = options;
    
                if (model === "Attach") return (await Api()).Post("v1/images/remini/recolor/attach", { image });
                if (model === "Url") return (await Api()).Get("v1/images/remini/recolor/url", { image });
            }
        },
        DEHAZE: {
            Generate: async function(options) {
                const { model, image } = options;
    
                if (model === "Attach") return (await Api()).Post("v1/images/remini/dehaze/attach", { image });
                if (model === "Url") return (await Api()).Get("v1/images/remini/dehaze/url", { image });
            }
        },
    }
};