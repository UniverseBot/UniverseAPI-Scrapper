module.exports = function(Api) {
    return {
        Attach: async (image) => (await Api()).post("v1/image/remini/attach", { image }),
        Url: async (image) => (await Api()).get("v1/image/remini/url", { image }),
        HdrAttach: async (image) => (await Api()).post("v1/image/remini/hdr-attach", { image }),
        HdrUrl: async (image) => (await Api()).get("v1/image/remini/hdr-url", { image }),
        RecolorAttach: async (image) => (await Api()).post("v1/image/remini/recolor-attach", { image }),
        RecolorUrl: async (image) => (await Api()).get("v1/image/remini/recolor-url", { image }),
        DehazeAttach: async (image) => (await Api()).post("v1/image/remini/dehaze-attach", { image }),
        DehazeUrl: async (image) => (await Api()).get("v1/image/remini/dehaze-url", { image })
    }
};