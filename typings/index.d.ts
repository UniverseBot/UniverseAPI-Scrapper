declare module "@mgalacyber/universeapi" {
    export class universeAPIClient {
        constructor(token: string);

        // private token: string;

        public V1: {
            Creator: {

                /**
                 * Create text image using photooxy creator.
                 * 
                 * @example
                 * const text = "Universe API";
                 * const result = await UniverseAPI.V1.Creator.Photooxy.Flaming(text);
                 * console.log(result); // Display the result of the Flaming operation
                 */
                Photooxy: {
                    Flaming: (text: string) => Promise<any>;
                    ShadowSky: (text: string) => Promise<any>;
                    Metallic: (text: string) => Promise<any>;
                    Naruto: (text: string) => Promise<any>;
                    Pubg: (text1: string, text2: string) => Promise<any>;
                    UnderGrass: (text: string) => Promise<any>;
                    HarryPotter: (text: string) => Promise<any>;
                    FlowerTypography: (text: string) => Promise<any>;
                    PictureOfLove: (text: string) => Promise<any>;
                    CoffeeCup: (text: string) => Promise<any>;
                    Butterfly: (text: string) => Promise<any>;
                    NightSky: (text: string) => Promise<any>;
                    CarvedWood: (text: string) => Promise<any>;
                    IlluminatedMetallic: (text: string) => Promise<any>;
                    SweetCandy: (text: string) => Promise<any>;
                    Coffee: (text: string) => Promise<any>;
                    QuotedWood: (text: string) => Promise<any>;
                    Flame: (url: string) => Promise<any>;
                    Frame: (url: string) => Promise<any>;
                    Memory: (url: string) => Promise<any>;
                    Nature: (url: string) => Promise<any>;
                    Ripped: (url: string) => Promise<any>;
                    Tearing: (url: string) => Promise<any>;
                    Iphone: (url: string) => Promise<any>;
                    Anaglyph: (url: string) => Promise<any>;
                    Mirrors: (url: string) => Promise<any>;
                    Shattered: (url: string) => Promise<any>;
                    Burning: (url: string) => Promise<any>;
                    Place: (url: string) => Promise<any>;
                    Toilet: (url: string) => Promise<any>;
                    Exposure: (url: string) => Promise<any>;
                    SlideText: (text: string) => Promise<any>;
                    Graffiti: (text: string) => Promise<any>;
                    Rainbow: (text: string) => Promise<any>;
                    OceanSea: (text: string) => Promise<any>;
                    Romantic: (text: string) => Promise<any>;
                    Smoke: (text: string) => Promise<any>;
                    Glitch: (text1: string, text2: string) => Promise<any>;
                    BurnPaper: (text: string) => Promise<any>;
                    LoveMessage: (text: string) => Promise<any>;
                    LoveText: (text: string) => Promise<any>;
                    Shadow: (text: string) => Promise<any>;
                }
            };
        };
    }
}