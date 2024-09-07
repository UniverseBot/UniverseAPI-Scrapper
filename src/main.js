const { Method } = require("./method");

/**
 * @class UniverseClient
 */
class UniverseClient {
    /**
     * @requires A valid API token is required for accessing the API.
     * @param {string} token The API token provided by https://api.universebot.space.
     * @description This function initializes the universeAPI client with the provided token.
     * @returns {void}
     * @example
     * const { UniverseClient } = require("@mgalacyber/universeapi");
     * const ApiToken = "UniverseAPI.XXXXXXXXXXXXX.XXXXXXXXXXXXX.XXXXXXXXXXXXX.XXXXXXXXXXXXX";
     * const uAPI = new UniverseClient(ApiToken);
     * 
     * uAPI.V1.AI.OpenAI.GPT.Text({
     *      model: "gpt4", // Type of model used (required)
     *      version: 1, // Model version of rest api (required)
     *      prompt: "Hello!" // Enter Your prompt here (required)
     * 
     * }).then((result) => console.log(result));
     */
    constructor(token) {
        this.ApiToken = token ? token : "";
        this.BaseUrl = "https://api.universebot.space";
    };
    async Api() {
        if (!this.ApiToken) {
            console.error(`Unknown API TOKEN: Please enter your API token or Register first here ${this.BaseUrl}/register`);
        };
        if (typeof this.ApiToken !== "string") {
            console.error("Invalid API TOKEN: Token must be a String");
        };
        return new Method(this.BaseUrl, { token: this.ApiToken });
    };

    /**
     * @description version 1 Universe API
     */
    get V1() {
        return {
            AI: {
                Blackbox: require("./v1/AI/Blackbox")(this.Api.bind(this)),
                ChatGLM: require("./v1/AI/ChatGLM")(this.Api.bind(this)),
                Deepseek: require("./v1/AI/Deepseek")(this.Api.bind(this)),
                Google: require("./v1/AI/Google")(this.Api.bind(this)),
                Llama: require("./v1/AI/Llama")(this.Api.bind(this)),
                Miaxtral: require("./v1/AI/Miaxtral")(this.Api.bind(this)),
                Microsoft: require("./v1/AI/Microsoft")(this.Api.bind(this)),
                OpenAI: require("./v1/AI/OpenAI")(this.Api.bind(this)),
                StableDiffusion: require("./v1/AI/StableDiffusion")(this.Api.bind(this)),
                TextToImage: require("./v1/AI/TextToImage")(this.Api.bind(this)),
                ToAnime: require("./v1/AI/ToAnime")(this.Api.bind(this))
            },
            Creator: {
                Ephoto: require("./v1/Creator/Ephoto")(this.Api.bind(this)),
                Photooxy: require("./v1/Creator/Photooxy")(this.Api.bind(this)),
                Textpro: require("./v1/Creator/Textpro")(this.Api.bind(this))
            },
            Detector: {
                NSFW: require("./v1/Detector/NSFW")(this.Api.bind(this))
            },
            Download: {
                AIO: require("./v1/Download/AIO")(this.Api.bind(this)),
                Audio: require("./v1/Download/Audio")(this.Api.bind(this)),
                Facebook: require("./v1/Download/Facebook")(this.Api.bind(this)),
                File: require("./v1/Download/File")(this.Api.bind(this)),
                Instagram: require("./v1/Download/Instagram")(this.Api.bind(this)),
                Pinterest: require("./v1/Download/Pinterest")(this.Api.bind(this)),
                Porn: require("./v1/Download/Porn")(this.Api.bind(this)),
                Thread: require("./v1/Download/Thread")(this.Api.bind(this)),
                Tiktok: require("./v1/Download/Tiktok")(this.Api.bind(this)),
                Twitter: require("./v1/Download/Twitter")(this.Api.bind(this)),
                Youtube: require("./v1/Download/Youtube")(this.Api.bind(this))
            },
            Game: {
                SusunKata: require("./v1/Games/SusunKata")(this.Api.bind(this)),
                Tebakan: require("./v1/Games/Tebakan")(this.Api.bind(this))
            },
            Image: {
                Pinterest: require("./v1/Images/Pinterest")(this.Api.bind(this)),
                Remini: require("./v1/Images/Remini")(this.Api.bind(this)),
                Wallpaper: require("./v1/Images/Wallpaper")(this.Api.bind(this)),
                Wikipedia: require("./v1/Images/Wikipedia")(this.Api.bind(this))
            },
            Search: {
                Google: require("./v1/Search/Google")(this.Api.bind(this))
            },
            Stalk: {
                Github: require("./v1/Stalk/Github")(this.Api.bind(this)),
                Instagram: require("./v1/Stalk/Instagram")(this.Api.bind(this)),
                NPM: require("./v1/Stalk/NPM")(this.Api.bind(this)),
                Tiktok: require("./v1/Stalk/Tiktok")(this.Api.bind(this)),
                Twitter: require("./v1/Stalk/Twitter")(this.Api.bind(this))
            },
            Tools: {
                ShortUrl: require("./v1/Tools/ShortUrl")(this.Api.bind(this)),
                Visitor: require("./v1/Tools/Visitor")(this.Api.bind(this))
            }
        };
    };

    /**
     * @description version 2 Universe API
     */
    get V2() {
        return {
            Download: {
                Youtube: require("./v2/Download/Youtube")(this.Api.bind(this))
            }
        };
    };
};

module.exports = { UniverseClient };