declare module "@mgalacyber/universeapi" {
    export class UniverseClient {
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
         *      model: "gpt4", // Type of model used
         *      version: 1, // Model version of rest api
         *      prompt: "Hello!" // Enter Your prompt here
         * 
         * }).then((result) => console.log(result));
         */
        public constructor(token: string);

        private token: string;

        public V1: {
            AI: {
                Blackbox: typeof import("./v1/AI/Blackbox"),
                ChatGLM: typeof import("./v1/AI/ChatGLM"),
                Deepseek: typeof import("./v1/AI/Deepseek"),
                Google: typeof import("./v1/AI/Google"),
                Llama: typeof import("./v1/AI/Llama"),
                Miaxtral: typeof import("./v1/AI/Miaxtral"),
                Microsoft: typeof import("./v1/AI/Microsoft"),
                OpenAI: typeof import("./v1/AI/OpenAI"),
                Qwen: typeof import("./v1/AI/Qwen"),
                StableDiffusion: typeof import("./v1/AI/StableDiffusion"),
                TextToImage: typeof import("./v1/AI/TextToImage"),
                /**
                 * @deprecated
                 */
                ToAnime: typeof import("./v1/AI/ToAnime"),
            },
            Creator: {
                Ephoto: typeof import("./v1/Creator/Ephoto"),
                Photooxy: typeof import("./v1/Creator/Photooxy"),
                Textpro: typeof import("./v1/Creator/Textpro")
            },
            Detector: {
                NSFW: typeof import("./v1/Detector/NSFW"),
            },
            Download: {
                AIO: typeof import("./v1/Download/AIO"),
                Audio: typeof import("./v1/Download/Audio"),
                Facebook: typeof import("./v1/Download/Facebook"),
                File: typeof import("./v1/Download/File"),
                Instagram: typeof import("./v1/Download/Instagram"),
                Pinterest: typeof import("./v1/Download/Pinterest"),
                Porn: typeof import("./v1/Download/Porn"),
                Thread: typeof import("./v1/Download/Thread"),
                Tiktok: typeof import("./v1/Download/Tiktok"),
                Twitter: typeof import("./v1/Download/Twitter"),
                Youtube: typeof import("./v1/Download/Youtube")
            },
            Game: {
                SusunKata: import("./v1/Games/SusunKata").SusunKata,
                Tebakan: import("./v1/Games/Tebakan").Tebakan,
            },
            Image: {
                Pinterest: import("./v1/Images/Pinterest").Pinterest,
                Remini: typeof import("./v1/Images/Remini"),
                Wallpaper: import("./v1/Images/Wallpaper").Wallpaper,
                Wikipedia: import("./v1/Images/Wikipedia").Wikipedia,
            },
            Search: {
                Google: import("./v1/Search/Google").Google,
            },
            Stalk: {
                Github: import("./v1/Stalk/Github").GitHub,
                Instagram: typeof import("./v1/Stalk/Instagram"),
                NPM: import("./v1/Stalk/NPM").NPM,
                TikTok: typeof import("./v1/Stalk/Tiktok"),
                Twitter: typeof import("./v1/Stalk/Twitter"),
            },
            Tools: {
                ShortUrl: typeof import("./v1/Tools/ShortUrl"),
                Visitor: typeof import("./v1/Tools/Visitor"),
            },
        };

        public V2: {
            Download: {
                /**
                 * @deprecated
                 */
                Youtube: import("./v2/Download/Youtube").Youtube
            },
        };
    }
}