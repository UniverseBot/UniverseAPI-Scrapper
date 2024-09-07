import Result from "../../utils/Result";

/**
 * Generate short url based on the specified options.
 * @returns {Promise<Result>} - A promise that resolves with the generated short url.
 */
export function Create(): Promise<Result>;

/**
 * Delete short url based on the specified options.
 * @returns {Promise<Result>} - A promise that resolves with the generated short url.
 */
export function Delete(id: string): Promise<Result>;

/**
 * Delete short url based on the specified options.
 * @returns {Promise<Result>} - A promise that resolves with the generated short url.
 */
export function Stats(id: string): Promise<Result>;

/**
 * Delete short url based on the specified options.
 * @returns {Promise<Result>} - A promise that resolves with the generated short url.
 */
export function Redirect(shortId: string): Promise<Result>;