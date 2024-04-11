module.exports = function(Api) {
    return {
        TextOnly: {
            Generate: async function(options) {
                const { model, text } = options;
    
                if (model === "Television") return (await Api()).Get("v1/creator/ephoto/television", { text });
                if (model === "Glasses") return (await Api()).Get("v1/creator/ephoto/glasses", { text });
                if (model === "Blackpink") return (await Api()).Get("v1/creator/ephoto/blackpink", { text });
                if (model === "Neonbp") return (await Api()).Get("v1/creator/ephoto/neonbp", { text });
                if (model === "CoverPUBG") return (await Api()).Get("v1/creator/ephoto/cover-pubg", { text });
                if (model === "GreenBrush") return (await Api()).Get("v1/creator/ephoto/green-brush", { text });
                if (model === "Eraser") return (await Api()).Get("v1/creator/ephoto/eraser", { text });
                if (model === "DragonFire") return (await Api()).Get("v1/creator/ephoto/dragon-fire", { text });
                if (model === "Incandescent") return (await Api()).Get("v1/creator/ephoto/incandescent", { text });
                if (model === "Typography1") return (await Api()).Get("v1/creator/ephoto/typography1", { text });
                if (model === "Typography2") return (await Api()).Get("v1/creator/ephoto/typography2", { text });
                if (model === "Letters") return (await Api()).Get("v1/creator/ephoto/letters", { text });
                if (model === "Cloth") return (await Api()).Get("v1/creator/ephoto/cloth", { text });
                if (model === "Graffiti") return (await Api()).Get("v1/creator/ephoto/graffiti", { text });
                if (model === "Metals") return (await Api()).Get("v1/creator/ephoto/metals", { text });
                if (model === "BlueNeon") return (await Api()).Get("v1/creator/ephoto/blue-neon", { text });
                if (model === "NightStars") return (await Api()).Get("v1/creator/ephoto/night-stars", { text });
                if (model === "Cloud") return (await Api()).Get("v1/creator/ephoto/cloud", { text });
                if (model === "Caper") return (await Api()).Get("v1/creator/ephoto/caper", { text });
                if (model === "Horror") return (await Api()).Get("v1/creator/ephoto/horror", { text });
                if (model === "Sunlight") return (await Api()).Get("v1/creator/ephoto/sunlight", { text });
                if (model === "Cake") return (await Api()).Get("v1/creator/ephoto/cake", { text });
                if (model === "Pig") return (await Api()).Get("v1/creator/ephoto/pig", { text });
                if (model === "Hallowen") return (await Api()).Get("v1/creator/ephoto/hallowen", { text });
                if (model === "LeafGraphy") return (await Api()).Get("v1/creator/ephoto/leaf-graphy", { text });
                if (model === "Water") return (await Api()).Get("v1/creator/ephoto/water", { text });
                if (model === "NeonBlue") return (await Api()).Get("v1/creator/ephoto/neon-blue", { text });
                if (model === "Foggy") return (await Api()).Get("v1/creator/ephoto/foggy", { text });
                if (model === "Crack") return (await Api()).Get("v1/creator/ephoto/crack", { text });
                if (model === "Puppy") return (await Api()).Get("v1/creator/ephoto/puppy", { text });
                if (model === "Metals") return (await Api()).Get("v1/creator/ephoto/metals", { text });
                if (model === "PUBGAvatar") return (await Api()).Get("v1/creator/ephoto/pubg-avatar", { text });
                if (model === "Tiger") return (await Api()).Get("v1/creator/ephoto/tiger", { text });
                if (model === "American") return (await Api()).Get("v1/creator/ephoto/american", { text });
                if (model === "Arrow1") return (await Api()).Get("v1/creator/ephoto/arrow1", { text });
                if (model === "Arrow2") return (await Api()).Get("v1/creator/ephoto/arrow2", { text });
                if (model === "Anonymous") return (await Api()).Get("v1/creator/ephoto/anonymous", { text });
                if (model === "AOV") return (await Api()).Get("v1/creator/ephoto/aov", { text });
                if (model === "Warface") return (await Api()).Get("v1/creator/ephoto/warface", { text });
                if (model === "MobileLegend") return (await Api()).Get("v1/creator/ephoto/mobile-legend", { text });
            }
        },
        UrlOnly: {
            Generate: async function(options) {
                const { model, url } = options;
    
                if (model === "Cyberpunk") return (await Api()).Get("v1/creator/ephoto/cyberpunk", { url });
                if (model === "Billboard") return (await Api()).Get("v1/creator/ephoto/billboard", { url });
                if (model === "Fire") return (await Api()).Get("v1/creator/ephoto/fire", { url });
                if (model === "Rain") return (await Api()).Get("v1/creator/ephoto/rain", { url });
                if (model === "Cat") return (await Api()).Get("v1/creator/ephoto/cat", { url });
                if (model === "Ring") return (await Api()).Get("v1/creator/ephoto/ring", { url });
                if (model === "Collage") return (await Api()).Get("v1/creator/ephoto/collage", { url });
                if (model === "Sad") return (await Api()).Get("v1/creator/ephoto/sad", { url });
                if (model === "CinemaGraph") return (await Api()).Get("v1/creator/ephoto/cinema-graph", { url });
                if (model === "VHS") return (await Api()).Get("v1/creator/ephoto/vhs", { url });
                if (model === "Memories") return (await Api()).Get("v1/creator/ephoto/memories", { url });
                if (model === "Flower") return (await Api()).Get("v1/creator/ephoto/flower", { url });
                if (model === "Heart") return (await Api()).Get("v1/creator/ephoto/heart", { url });
                if (model === "Smoke") return (await Api()).Get("v1/creator/ephoto/smoke", { url });
                if (model === "HandleFire") return (await Api()).Get("v1/creator/ephoto/handle-fire", { url });
                if (model === "Specturm") return (await Api()).Get("v1/creator/ephoto/specturm", { url });
                if (model === "Painting") return (await Api()).Get("v1/creator/ephoto/painting", { url });
            }
        },
        TextWithUrl: {
            Generate: async function(options) {
                const { model, text, url } = options;
    
                if (model === "Artistic") return (await Api()).Get("v1/creator/ephoto/artistic", { text, url });
                if (model === "Diary") return (await Api()).Get("v1/creator/ephoto/diary", { text, url });
                if (model === "DiaryFrame") return (await Api()).Get("v1/creator/ephoto/diary-frame", { text, url });
                if (model === "Glazing") return (await Api()).Get("v1/creator/ephoto/glazing", { text, url });
            }
        },
        TextWithNumber: {
            Generate: async function(options) {
                const { model, text, number } = options;
    
                if (model === "Juventus") return (await Api()).Get("v1/creator/ephoto/juventus", { text, number });
                if (model === "Scholes") return (await Api()).Get("v1/creator/ephoto/scholes", { text, number });
            }
        },
        DoubleText: {
            Generate: async function(options) {
                const { model, text1, text2 } = options;

                if (model === "Wood") return (await Api()).Get("v1/creator/ephoto/wood", { text1, text2 });
                if (model === "WriteStatus") return (await Api()).Get("v1/creator/ephoto/write-status", { text1, text2 });
                if (model === "Heated") return (await Api()).Get("v1/creator/ephoto/heated", { text1, text2 });
                if (model === "Buoys") return (await Api()).Get("v1/creator/ephoto/buoys", { text1, text2 });
                if (model === "QuotesStatus") return (await Api()).Get("v1/creator/ephoto/quotes-status", { text1, text2 });
                if (model === "Pencil") return (await Api()).Get("v1/creator/ephoto/pencil", { text1, text2 });
            }
        },
        DoubleTextWithUrl: {
            Generate: async function(options) {
                const { model, text1, text2, url } = options;
    
                if (model === "Adventure") return (await Api()).Get("v1/creator/ephoto/adventure", { text1, text2, url });
                if (model === "Notebook") return (await Api()).Get("v1/creator/ephoto/notebook", { text1, text2, url });
                if (model === "WPoster") return (await Api()).Get("v1/creator/ephoto/wposter", { text1, text2, url });
            }
        },
    }
};