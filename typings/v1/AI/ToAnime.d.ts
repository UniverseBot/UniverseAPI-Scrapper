import Result from "../../utils/Result";

export interface GenerateOptions {
    version: number;
    url: string;
}

/**
 * Generate text based on the specified options.
 * @param {GenerateOptions} options - The options for generating text.
 * @returns {Promise<Result>} - A promise that resolves with the generated text.
 */
export function Generate(options: GenerateOptions): Promise<Result>;