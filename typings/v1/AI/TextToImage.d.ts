import Result from "../../utils/Result";

export interface GenerateOptions {
    version: number;
    prompt: string;
}

/**
 * Generate image based on the specified options.
 * @param {GenerateOptions} options - The options for generating image.
 * @returns {Promise<Result>} - A promise that resolves with the generated image.
 */
export function Generate(options: GenerateOptions): Promise<Result>;