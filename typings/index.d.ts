declare module "@mgalacyber/universeapi" {
    export class universeAPIClient {
        public constructor(token: string);

        private token: string;

        public V1: {
            AI: {

                /**
                 * AI operations using Blackbox.
                 * 
                 * @example
                 * // Example of using the Model1 operation
                 * const prompt = "Generate creative website";
                 * const result = await UniverseAPI.AI.Blackbox.Model1(prompt);
                 * console.log(result);
                 */
                Blackbox: import("./v1/AI/Blackbox").Blackbox,

                /**
                 * AI operations using ChatGPT.
                 * 
                 * @example
                 * // Example of using the Model1 operation
                 * const prompt = "Generate creative content";
                 * const result = await UniverseAPI.AI.ChatGPT.Model1(prompt);
                 * console.log(result);
                 */
                ChatGPT: import("./v1/AI/ChatGPT").ChatGPT,

                Google: {

                    /**
                     * AI operations using Google Gemini.
                     * 
                     * @example
                     * // Example of using the Pro operation
                     * const prompt = "Generate creative content";
                     * const result = await UniverseAPI.AI.Google.Gemini.Pro(prompt);
                     * console.log(result);
                     */
                    Gemini: import("./v1/AI/Google").Gemini,

                    /**
                     * AI operations using Google Bard.
                     * 
                     * @example
                     * // Example of using the Pro operation
                     * const prompt = "Generate creative content";
                     * const result = await UniverseAPI.AI.Google.Bard.Model1(prompt);
                     * console.log(result);
                     */
                    Bard: import("./v1/AI/Google").Bard,
                },

                /**
                 * AI operations using Microsoft.
                 * 
                 * @example
                 * // Example of using the Model1 operation
                 * const prompt = "Generate creative content";
                 * const result = await UniverseAPI.AI.Microsoft.Bing.Model1(prompt);
                 * console.log(result);
                 */
                Microsoft: {
                    Bing: import("./v1/AI/Microsoft").Bing
                },

                /**
                 * AI operations using Stable Diffusion.
                 * 
                 * @example
                 * // Example of using the Model1 operation
                 * const prompt = "Generate creative image";
                 * const result = await UniverseAPI.AI.StableDiffusion.Model1(prompt);
                 * console.log(result);
                 */
                StableDiffusion: import("./v1/AI/StableDiffusion").StableDiffusion,

                /**
                 * AI operations using Text 2 Image.
                 * 
                 * @example
                 * // Example of using the Model1 operation
                 * const prompt = "Generate creative image";
                 * const result = await UniverseAPI.AI.TextToImage.Model1(prompt);
                 * console.log(result);
                 */
                TextToImage: import("./v1/AI/TextToImage").TextToImage,

                /**
                 * AI operations using To Anime.
                 * 
                 * @example
                 * // Example of using the Model1 operation
                 * const prompt = "https://domain.com/image.png";
                 * const result = await UniverseAPI.AI.ToAnime.Model1(prompt);
                 * console.log(result);
                 */
                ToAnime: import("./v1/AI/ToAnime").TextToImage,
            },
            Creator: {

                /**
                 * Create text image using ephoto creator.
                 * 
                 * @example
                 * const text = "Universe API";
                 * const result = await UniverseAPI.V1.Creator.Ephoto.Artistic(text, url);
                 * console.log(result);
                 */
                Ephoto: import("./v1/Creator/Ephoto").Ephoto,

                /**
                 * Create text image using photooxy creator.
                 * 
                 * @example
                 * const text = "Universe API";
                 * const result = await UniverseAPI.V1.Creator.Photooxy.Flaming(text);
                 * console.log(result);
                 */
                Photooxy: import("./v1/Creator/Photooxy").Photooxy,

                /**
                 * Create text image using textpro.me creator.
                 * 
                 * @example
                 * const text = "Universe API";
                 * const result = await UniverseAPI.V1.Creator.Textpro.Pencil(text);
                 * console.log(result);
                 */
                Textpro: import("./v1/Creator/Textpro").TextPro
            },
            Download: {

                /**
                 * Download content using various sources through AIO (All-In-One).
                 * 
                 * @example
                 * const url = "https://example.com/content";
                 * const result = await UniverseAPI.V1.Download.AIO.Pinterest(url);
                 * console.log(result);
                 */
                AIO: import("./v1/Download/AIO").AIO,

                /**
                 * Download audio content from different platforms.
                 * 
                 * @example
                 * const url = "https://soundcloud.com/example/track";
                 * const result = await UniverseAPI.V1.Download.Audio.SoundCloud1(url);
                 * console.log(result);
                 */
                Audio: import("./v1/Download/Audio").Audio,

                /**
                 * Download content from Facebook.
                 * 
                 * @example
                 * const url = "https://facebook.com/example/video";
                 * const result = await UniverseAPI.V1.Download.Facebook.Model1(url);
                 * console.log(result);
                 */
                Facebook: import("./v1/Download/Facebook").Facebook,

                /**
                 * Download various file types from different sources.
                 * 
                 * @example
                 * const url = "https://example.com/file";
                 * const result = await UniverseAPI.V1.Download.File.SFileMobi(url);
                 * console.log(result);
                 */
                File: import("./v1/Download/File").File,

                /**
                 * Download content from Instagram.
                 * 
                 * @example
                 * const url = "https://instagram.com/example/post";
                 * const result = await UniverseAPI.V1.Download.Instagram.Model1(url);
                 * console.log(result);
                 */
                Instagram: import("./v1/Download/Instagram").Instagram,

                /**
                 * Download content from Pinterest.
                 * 
                 * @example
                 * const url = "https://pinterest.com/example/post";
                 * const result = await UniverseAPI.V1.Download.Pinterest.Model1(url);
                 * console.log(result);
                 */
                Pinterest: import("./v1/Download/Pinterest").Pinterest,

                /**
                 * Download adult content from various sources.
                 * 
                 * @example
                 * const url = "https://xnxx.com/videos/example";
                 * const result = await UniverseAPI.V1.Download.Porn.XNXX(url);
                 * console.log(result);
                 */
                Porn: import("./v1/Download/Porn").Porn,

                /**
                 * Download content from Thread.
                 * 
                 * @example
                 * const url = "https://threads.com/example/post";
                 * const result = await UniverseAPI.V1.Download.Thread.Model1(url);
                 * console.log(result);
                 */
                Thread: import("./v1/Download/Thread").Thread,

                /**
                 * Download content from TikTok.
                 * 
                 * @example
                 * const url = "https://tiktok.com/@example/video";
                 * const result = await UniverseAPI.V1.Download.TikTok.Model1(url);
                 * console.log(result);
                 */
                TikTok: import("./v1/Download/Tiktok").TikTok,

                /**
                 * Download content from Twitter.
                 * 
                 * @example
                 * const url = "https://twitter.com/example/status";
                 * const result = await UniverseAPI.V1.Download.Twitter.Model1(url);
                 * console.log(result);
                 */
                Twitter: import("./v1/Download/Twitter").Twitter,

                /**
                 * Download content from YouTube.
                 * 
                 * @example
                 * const query = "Universe API introduction";
                 * const result = await UniverseAPI.V1.Download.YouTube.Play(query);
                 * console.log(result);
                 */
                Youtube: import("./v1/Download/Youtube").Youtube
            },
            Game: {

                /**
                 * Play a game to arrange shuffled words in the correct order.
                 * 
                 * @example
                 * const result = await UniverseAPI.V1.Game.SusunKata.Main();
                 * console.log(result);
                 */
                SusunKata: import("./v1/Game/SusunKata").SusunKata,

                /**
                 * Play a guessing game.
                 * 
                 * @example
                 * const result = await UniverseAPI.V1.Game.Tebakan.Bendera();
                 * console.log(result);
                 */
                Tebakan: import("./v1/Game/Tebakan").Tebakan,
            },
            Image: {

                /**
                 * Search and download images from Pinterest.
                 * 
                 * @example
                 * const query = "Nature";
                 * const result = await UniverseAPI.V1.Image.Pinterest.Find(query);
                 * console.log(result);
                 */
                Pinterest: import("./v1/Image/Pinterest").Pinterest,

                /**
                 * Enhance or restore images using Remini.
                 * 
                 * @example
                 * const image = "https://example.com/photo.jpg";
                 * const result = await UniverseAPI.V1.Image.Remini.Url(image);
                 * console.log(result);
                 */
                Remini: import("./v1/Image/Remini").Remini,

                /**
                 * Get wallpapers from various categories.
                 * 
                 * @example
                 * const query = "Nature";
                 * const result = await UniverseAPI.V1.Image.Wallpaper.Find(query);
                 * console.log(result);
                 */
                Wallpaper: import("./v1/Image/Wallpaper").Wallpaper,

                /**
                 * Search and download images from Wikipedia.
                 * 
                 * @example
                 * const query = "Albert Einstein";
                 * const result = await UniverseAPI.V1.Image.Wikipedia.Find(query);
                 * console.log(result);
                 */
                Wikipedia: import("./v1/Image/Wikipedia").Wikipedia,
            },
            Search: {

                /**
                 * Perform a Google search and get search results.
                 * 
                 * @example
                 * const query = "Universe API";
                 * const result = await UniverseAPI.V1.Search.Google.Find(query);
                 * console.log(result);
                 */
                Google: import("./v1/Search/Google").Google,
            },
            Stalk: {

                /**
                 * Stalk a user on GitHub and get user details.
                 * 
                 * @example
                 * const username = "mgalacyber";
                 * const result = await UniverseAPI.V1.Stalk.Github.User(username);
                 * console.log(result);
                 */
                Github: import("./v1/Stalk/Github").GitHub,

                /**
                 * Stalk a user on Instagram and get user details.
                 * 
                 * @example
                 * const username = "instagramuser";
                 * const result = await UniverseAPI.V1.Stalk.Instagram.Model1(username);
                 * console.log(result);
                 */
                Instagram: import("./v1/Stalk/Instagram").Instagram,

                /**
                 * Stalk a package on NPM (Node Package Manager) and get package details.
                 * 
                 * @example
                 * const packageName = "axios";
                 * const result = await UniverseAPI.V1.Stalk.NPM.Find(packageName);
                 * console.log(result);
                 */
                NPM: import("./v1/Stalk/NPM").NPM,

                /**
                 * Stalk a user on TikTok and get user details.
                 * 
                 * @example
                 * const username = "tiktokuser";
                 * const result = await UniverseAPI.V1.Stalk.Tiktok.Find(username);
                 * console.log(result);
                 */
                TikTok: import("./v1/Stalk/Tiktok").TikTok,

                /**
                 * Stalk a user on Twitter and get user details.
                 * 
                 * @example
                 * const username = "twitteruser";
                 * const result = await UniverseAPI.V1.Stalk.Twitter.Find(username);
                 * console.log(result);
                 */
                Twitter: import("./v1/Stalk/Twitter").Twitter,
            },
        };

        public V2: {
            Download: {

                /**
                 * Download content from YouTube.
                 * 
                 * @example
                 * const query = "Universe API introduction";
                 * const result = await UniverseAPI.V1.Download.YouTube.PlayMp3(query);
                 * console.log(result);
                 */
                Youtube: import("./v2/Download/Youtube").Youtube
            },
        };
    }
}