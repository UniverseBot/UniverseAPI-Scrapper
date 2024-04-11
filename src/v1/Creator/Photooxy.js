module.exports = function(Api) {
    return {
        TextOnly: {
            Generate: async function(options) {
                const { model, text } = options;
    
                if (model === "Flaming") return (await Api()).Get("v1/creator/photooxy/flaming", { text });
                if (model === "ShadowSky") return (await Api()).Get("v1/creator/photooxy/shadow-sky", { text });
                if (model === "Metallic") return (await Api()).Get("v1/creator/photooxy/metallic", { text });
                if (model === "Naruto") return (await Api()).Get("v1/creator/photooxy/naruto", { text });
                if (model === "UnderGrass") return (await Api()).Get("v1/creator/photooxy/under-grass", { text });
                if (model === "HarryPotter") return (await Api()).Get("v1/creator/photooxy/harry-potter", { text });
                if (model === "FlowerTypography") return (await Api()).Get("v1/creator/photooxy/flower-typography", { text });
                if (model === "PictureOfLove") return (await Api()).Get("v1/creator/photooxy/picture-of-love", { text });
                if (model === "CoffeeCup") return (await Api()).Get("v1/creator/photooxy/coffee-cup", { text });
                if (model === "Butterfly") return (await Api()).Get("v1/creator/photooxy/butterfly", { text });
                if (model === "NightSky") return (await Api()).Get("v1/creator/photooxy/night-sky", { text });
                if (model === "CarvedWood") return (await Api()).Get("v1/creator/photooxy/carved-wood", { text });
                if (model === "IlluminatedMetallic") return (await Api()).Get("v1/creator/photooxy/illuminated-metallic", { text });
                if (model === "SweetCandy") return (await Api()).Get("v1/creator/photooxy/sweet-candy", { text });
                if (model === "Coffee") return (await Api()).Get("v1/creator/photooxy/coffee", { text });
                if (model === "QuotedWood") return (await Api()).Get("v1/creator/photooxy/quoted-wood", { text });
                if (model === "SlideText") return (await Api()).Get("v1/creator/photooxy/slide-text", { text });
                if (model === "Graffiti") return (await Api()).Get("v1/creator/photooxy/graffiti", { text });
                if (model === "Rainbow") return (await Api()).Get("v1/creator/photooxy/rainbow", { text });
                if (model === "OceanSea") return (await Api()).Get("v1/creator/photooxy/ocean-sea", { text });
                if (model === "Romantic") return (await Api()).Get("v1/creator/photooxy/romantic", { text });
                if (model === "Smoke") return (await Api()).Get("v1/creator/photooxy/smoke", { text });
                if (model === "BurnPaper") return (await Api()).Get("v1/creator/photooxy/burn-paper", { text });
                if (model === "LoveMessage") return (await Api()).Get("v1/creator/photooxy/love-message", { text });
                if (model === "LoveText") return (await Api()).Get("v1/creator/photooxy/love-text", { text });
                if (model === "Shadow") return (await Api()).Get("v1/creator/photooxy/shadow", { text });
            }
        },
        UrlOnly: {
            Generate: async function(options) {
                const { model, url } = options;
    
                if (model === "Flame") return (await Api()).Get("v1/creator/photooxy/flame", { url });
                if (model === "Frame") return (await Api()).Get("v1/creator/photooxy/frame", { url });
                if (model === "Memory") return (await Api()).Get("v1/creator/photooxy/memory", { url });
                if (model === "Nature") return (await Api()).Get("v1/creator/photooxy/nature", { url });
                if (model === "Ripped") return (await Api()).Get("v1/creator/photooxy/ripped", { url });
                if (model === "Tearing") return (await Api()).Get("v1/creator/photooxy/tearing", { url });
                if (model === "Iphone") return (await Api()).Get("v1/creator/photooxy/iphone", { url });
                if (model === "Anaglyph") return (await Api()).Get("v1/creator/photooxy/anaglyph", { url });
                if (model === "Mirrors") return (await Api()).Get("v1/creator/photooxy/mirrors", { url });
                if (model === "Shattered") return (await Api()).Get("v1/creator/photooxy/shattered", { url });
                if (model === "Burning") return (await Api()).Get("v1/creator/photooxy/burning", { url });
                if (model === "Place") return (await Api()).Get("v1/creator/photooxy/place", { url });
                if (model === "Toilet") return (await Api()).Get("v1/creator/photooxy/toilet", { url });
                if (model === "Exposure") return (await Api()).Get("v1/creator/photooxy/exposure", { url });
            }
        },
        DoubleText: {
            Generate: async function(options) {
                const { model, text1, text2 } = options;
    
                if (model === "Pubg") return (await Api()).Get("v1/creator/photooxy/pubg", { text1, text2 });
                if (model === "Glitch") return (await Api()).Get("v1/creator/photooxy/glitch", { text1, text2 });
            }
        },
    }
};