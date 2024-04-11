import Result from "../../utils/Result";

export namespace GPT {
    export type ModelOptions = "gpt3.5-turbo" | "gpt4";

    export interface TextOptions {
        model: ModelOptions;
        version: number;
        prompt: string;
    }

    /**
     * Generate text based on the specified options.
     * @param {TextOptions} options - The options for generating text.
     * @returns {Promise<Result>} - A promise that resolves with the generated text.
     */
    export function Text(options: TextOptions): Promise<Result>;
}

export namespace DALLE {
    export type ModelOptions = "dalle-2";

    export interface Options {
        model: ModelOptions;
        version: number;
        prompt: string;
    }

    /**
     * Generate image based on the specified options.
     * @param {Options} options - The options for generating image.
     * @returns {Promise<Result>} - A promise that resolves with the generated image.
     */
    export function Generate(options: Options): Promise<Result>;
}