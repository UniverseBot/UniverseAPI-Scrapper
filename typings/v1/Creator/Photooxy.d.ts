import Result from "../../utils/Result";

export namespace TextOnly {
    export type ModelOptions = "Flaming" | "ShadowSky" | "Metallic" | "Naruto" | "UnderGrass" | "HarryPotter" | "FlowerTypography"
        | "PictureOfLove" | "CoffeeCup" | "Butterfly" | "NightSky" | "CarvedWood" | "IlluminatedMetallic" | "SweetCandy"
        | "Coffee" | "QuotedWood" | "SlideText" | "Graffiti" | "Rainbow" | "OceanSea" | "Romantic" | "Smoke"
        | "BurnPaper" | "LoveMessage" | "LoveText" | "Shadow";

    export interface GenerateOptions {
        model: ModelOptions;
        text: string;
    }

    /**
     * Generate image based on the specified options.
     * @param {GenerateOptions} options - The options for generating image.
     * @returns {Promise<Result>} - A promise that resolves with the generated image.
     */
    export function Generate(options: GenerateOptions): Promise<Result>;
}

export namespace UrlOnly {
    export type ModelOptions = "Flame" | "Frame" | "Memory" | "Nature" | "Ripped" | "Tearing" | "Iphone"
        | "Anaglyph" | "Mirrors" | "Shattered" | "Burning" | "Place" | "Toilet" | "Exposure";

    export interface GenerateOptions {
        model: ModelOptions;
        url: string;
    }

    /**
     * Generate image based on the specified options.
     * @param {GenerateOptions} options - The options for generating image.
     * @returns {Promise<Result>} - A promise that resolves with the generated image.
     */
    export function Generate(options: GenerateOptions): Promise<Result>;
}

export namespace DoubleText {
    export type ModelOptions = "Pubg" | "Glitch";

    export interface GenerateOptions {
        model: ModelOptions;
        text1: string;
        text2: string;
    }

    /**
     * Generate image based on the specified options.
     * @param {GenerateOptions} options - The options for generating image.
     * @returns {Promise<Result>} - A promise that resolves with the generated image.
     */
    export function Generate(options: GenerateOptions): Promise<Result>;
}