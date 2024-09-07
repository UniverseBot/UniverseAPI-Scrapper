import Result from "../../utils/Result";

export interface TextOptions {
    version: number;
    prompt: string;
}

/**
 * Generate text based on the specified options.
 * @param {TextOptions} options - The options for generating text.
 * @returns {Promise<Result>} - A promise that resolves with the generated text.
 */
export function Text(options: TextOptions): Promise<Result>;