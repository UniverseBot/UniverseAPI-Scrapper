const { API } = require("./method");

/**
 * @class universeAPIClient
 */
class universeAPIClient {

    /**
     * @param {string} token provider api.universebot.space
     */
    constructor(token) {
        this.ApiToken = token ? token : "";
        this.BaseUrl = "https://api.universebot.space";
    };
    async Api() {
        if (!this.ApiToken) {
            console.error("Unknown API TOKEN: Please enter your API token")
        };
        if (typeof this.ApiToken !== "string") {
            console.error("Invalid API TOKEN: Token must be a String")
        };
        return new API(this.BaseUrl, { token: this.ApiToken });
    };

    /**
     * @description version 1 Universe API
     */
    get V1() {
        return {
            Creator: {
                Photooxy: {
                    Flaming: async (text) => (await this.Api()).get("v1/creator/photooxy/flaming", { text }),
                    ShadowSky: async (text) => (await this.Api()).get("v1/creator/photooxy/shadow-sky", { text }),
                    Metallic: async (text) => (await this.Api()).get("v1/creator/photooxy/metallic", { text }),
                    Naruto: async (text) => (await this.Api()).get("v1/creator/photooxy/naruto", { text }),
                    Pubg: async (text1, text2) => (await this.Api()).get("v1/creator/photooxy/pubg", { text1, text2 }),
                    UnderGrass: async (text) => (await this.Api()).get("v1/creator/photooxy/under-grass", { text }),
                    HarryPotter: async (text) => (await this.Api()).get("v1/creator/photooxy/harry-potter", { text }),
                    FlowerTypography: async (text) => (await this.Api()).get("v1/creator/photooxy/flower-typography", { text }),
                    PictureOfLove: async (text) => (await this.Api()).get("v1/creator/photooxy/picture-of-love", { text }),
                    CoffeeCup: async (text) => (await this.Api()).get("v1/creator/photooxy/coffee-cup", { text }),
                    Butterfly: async (text) => (await this.Api()).get("v1/creator/photooxy/butterfly", { text }),
                    NightSky: async (text) => (await this.Api()).get("v1/creator/photooxy/night-sky", { text }),
                    CarvedWood: async (text) => (await this.Api()).get("v1/creator/photooxy/carved-wood", { text }),
                    IlluminatedMetallic: async (text) => (await this.Api()).get("v1/creator/photooxy/illuminated-metallic", { text }),
                    SweetCandy: async (text) => (await this.Api()).get("v1/creator/photooxy/sweet-candy", { text }),
                    Coffee: async (text) => (await this.Api()).get("v1/creator/photooxy/coffee", { text }),
                    QuotedWood: async (text) => (await this.Api()).get("v1/creator/photooxy/quoted-wood", { text }),
                    Flame: async (url) => (await this.Api()).get("v1/creator/photooxy/flame", { url }),
                    Frame: async (url) => (await this.Api()).get("v1/creator/photooxy/frame", { url }),
                    Memory: async (url) => (await this.Api()).get("v1/creator/photooxy/memory", { url }),
                    Nature: async (url) => (await this.Api()).get("v1/creator/photooxy/nature", { url }),
                    Ripped: async (url) => (await this.Api()).get("v1/creator/photooxy/ripped", { url }),
                    Tearing: async (url) => (await this.Api()).get("v1/creator/photooxy/tearing", { url }),
                    Iphone: async (url) => (await this.Api()).get("v1/creator/photooxy/iphone", { url }),
                    Anaglyph: async (url) => (await this.Api()).get("v1/creator/photooxy/anaglyph", { url }),
                    Mirrors: async (url) => (await this.Api()).get("v1/creator/photooxy/mirrors", { url }),
                    Shattered: async (url) => (await this.Api()).get("v1/creator/photooxy/shattered", { url }),
                    Burning: async (url) => (await this.Api()).get("v1/creator/photooxy/burning", { url }),
                    Place: async (url) => (await this.Api()).get("v1/creator/photooxy/place", { url }),
                    Toilet: async (url) => (await this.Api()).get("v1/creator/photooxy/toilet", { url }),
                    Exposure: async (url) => (await this.Api()).get("v1/creator/photooxy/exposure", { url }),
                    SlideText: async (text) => (await this.Api()).get("v1/creator/photooxy/slide-text", { text }),
                    Graffiti: async (text) => (await this.Api()).get("v1/creator/photooxy/graffiti", { text }),
                    Rainbow: async (text) => (await this.Api()).get("v1/creator/photooxy/rainbow", { text }),
                    OceanSea: async (text) => (await this.Api()).get("v1/creator/photooxy/ocean-sea", { text }),
                    Romantic: async (text) => (await this.Api()).get("v1/creator/photooxy/romantic", { text }),
                    Smoke: async (text) => (await this.Api()).get("v1/creator/photooxy/smoke", { text }),
                    Glitch: async (text1, text2) => (await this.Api()).get("v1/creator/photooxy/glitch", { text1, text2 }),
                    BurnPaper: async (text) => (await this.Api()).get("v1/creator/photooxy/burn-paper", { text }),
                    LoveMessage: async (text) => (await this.Api()).get("v1/creator/photooxy/love-message", { text }),
                    LoveText: async (text) => (await this.Api()).get("v1/creator/photooxy/love-text", { text }),
                    Shadow: async (text) => (await this.Api()).get("v1/creator/photooxy/shadow", { text }),
                }
            }
        };
    }
};

module.exports = {universeAPIClient};