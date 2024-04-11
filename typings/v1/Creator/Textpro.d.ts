import Result from "../../utils/Result";

export namespace TextOnly {
    export type ModelOptions = "Pencil" | "Glitch1" | "Glitch2" | "Blackpink" | "Berry" | "Neon" | "LogoBear"
        | "Christmas3D" | "Boxtext3D" | "NeonLight3D" | "OrangeJuice3D" | "Thunder1" | "Thunder2"
        | "GreenHorror" | "Magma" | "ChocolateCake" | "Strawberry" | "Paper" | "HarryPotter"
        | "Embossed" | "Broken" | "Glosy" | "Bear" | "Devil" | "Christmas" | "Dropwater"
        | "Carbon" | "ImgGlitch" | "Gradient" | "Glue" | "Bood" | "Firework" | "Stone"
        | "Metalic" | "Metallic" | "Discovery" | "Circuit" | "Sketch" | "Skeleton"
        | "Light" | "Transformer" | "VideoGame" | "Fiction" | "CaptainAmerica";

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

export namespace DoubleText {
    export type ModelOptions = "GlitchTiktok" | "LogoNinja" | "VideoGameClassic" | "MarvelStudios"
        | "Layered" | "Pornhub" | "AGlitch" | "CHoror" | "Spooky";

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