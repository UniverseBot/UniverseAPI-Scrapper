import Result from "../../utils/Result";

/**
 * Generate visitor counter based on the specified options.
 * @returns {Promise<Result>} - A promise that resolves with the generated visitor id.
 */
export function Create(): Promise<Result>;

/**
 * Delete visitor counter based on the specified options.
 * @returns {Promise<Result>} - A promise that resolves with the generated visitor id.
 */
export function Delete(id: string): Promise<Result>;

/**
 * Delete visitor counter based on the specified options.
 * @returns {Promise<Result>} - A promise that resolves with the generated visitor id.
 */
export function Stats(id: string): Promise<Result>;

/**
 * Delete visitor counter based on the specified options.
 * @returns {Promise<Result>} - A promise that resolves with the generated visitor id.
 */
export function Hit(visitorId: string): Promise<Result>;