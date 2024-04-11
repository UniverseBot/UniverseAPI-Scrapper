import Result from "../../utils/Result";

export namespace TextOnly {
    export type ModelOptions = "Television" | "Glasses" | "Blackpink" | "Neonbp" | "CoverPUBG" | "GreenBrush" | "Eraser" | "DragonFire"
        | "Incandescent" | "Typography1" | "Typography2" | "Letters" | "Cloth" | "Graffiti" | "Metals" | "BlueNeon" | "NightStars"
        | "Cloud" | "Caper" | "Horror" | "Sunlight" | "Cake" | "Pig" | "Hallowen" | "LeafGraphy" | "Water" | "NeonBlue"
        | "Foggy" | "Crack" | "Puppy" | "PUBGAvatar" | "Tiger" | "American" | "Arrow1" | "Arrow2" | "Anonymous"
        | "AOV" | "Warface" | "MobileLegend";

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
    export type ModelOptions = "Cyberpunk" | "Billboard" | "Fire" | "Rain" | "Cat" | "Ring"
        | "Collage" | "Sad" | "CinemaGraph" | "VHS" | "Memories" | "Flower" | "Heart"
        | "Smoke" | "HandleFire" | "Specturm" | "Painting";

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

export namespace TextWithUrl {
    export type ModelOptions = "Artistic" | "Diary" | "DiaryFrame" | "Glazing";

    export interface GenerateOptions {
        model: ModelOptions;
        text: string;
        url: string;
    }

    /**
     * Generate image based on the specified options.
     * @param {GenerateOptions} options - The options for generating image.
     * @returns {Promise<Result>} - A promise that resolves with the generated image.
     */
    export function Generate(options: GenerateOptions): Promise<Result>;
}

export namespace TextWithNumber {
    export type ModelOptions = "Juventus" | "Scholes";

    export interface GenerateOptions {
        model: ModelOptions;
        text: string;
        number: number;
    }

    /**
     * Generate image based on the specified options.
     * @param {GenerateOptions} options - The options for generating image.
     * @returns {Promise<Result>} - A promise that resolves with the generated image.
     */
    export function Generate(options: GenerateOptions): Promise<Result>;
}

export namespace DoubleText {
    export type ModelOptions = "Wood" | "WriteStatus" | "Heated" | "Buoys" | "QuotesStatus" | "Pencil";

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

export namespace DoubleTextWithUrl {
    export type ModelOptions = "Adventure" | "Notebook" | "WPoster";

    export interface GenerateOptions {
        model: ModelOptions;
        text1: string;
        text2: string;
        url: number;
    }

    /**
     * Generate image based on the specified options.
     * @param {GenerateOptions} options - The options for generating image.
     * @returns {Promise<Result>} - A promise that resolves with the generated image.
     */
    export function Generate(options: GenerateOptions): Promise<Result>;
}