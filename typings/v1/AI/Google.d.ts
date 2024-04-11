import Result from "../../utils/Result";

export namespace Gemini {
    export type ModelOptions = "1.0-pro" | "1.0-pro-vision";
    export type TypeOptions = "attacment" | "url";

    export interface TextOptions {
        model: ModelOptions;
        version: number;
        prompt: string;
    }
    export interface VisionOptions {
        model: ModelOptions;
        type: TypeOptions;
        version: number;
        image: string,
        prompt: string;
    }

    /**
     * Generate text based on the specified options.
     * @param {TextOptions} options - The options for generating text.
     * @returns {Promise<Result>} - A promise that resolves with the generated text.
     */
    export function Text(options: TextOptions): Promise<Result>;

    /**
     * Describe the content of an image based on the specified options.
     * @param {VisionOptions} options - The options for describing the image.
     * @returns {Promise<Result>} - A promise that resolves with the description of the image.
     */
    export function Vision(options: VisionOptions): Promise<Result>;
}

export namespace Bard {
    export interface Options {
        version: number;
        prompt: string;
    }

    /**
     * Generate text based on the specified options.
     * @param {TextOptions} options - The options for generating text.
     * @returns {Promise<Result>} - A promise that resolves with the generated text.
     * @description Deprecated
     */
    export function Text(options: Options): Promise<Result>;
}