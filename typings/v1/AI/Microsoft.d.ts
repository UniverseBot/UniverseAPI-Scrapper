import Result from "../../utils/Result";

export namespace BING {
    export interface TextOptions {
        version: number;
        prompt: string;
    }
    export interface ImageOptions {
        version: number;
        url: string;
        prompt: string;
    }
    
    /**
     * Generate text based on the specified options.
     * @param {TextOptions} options - The options for generating text.
     * @returns {Promise<Result>} - A promise that resolves with the generated text.
     */
    export function Text(options: TextOptions): Promise<Result>;
    
    /**
     * Generate text based on the specified options.
     * @param {ImageOptions} options - The options for generating text.
     * @returns {Promise<Result>} - A promise that resolves with the generated text.
     */
    export function Image(options: ImageOptions): Promise<Result>;
}