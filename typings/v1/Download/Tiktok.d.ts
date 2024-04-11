import Result from "../../utils/Result";

export interface AnalysisOptions {
    version: number;
    url: string;
}

/**
 * Analyze TikTok content based on the specified options.
 * @param {AnalysisOptions} options - The options for analyzing TikTok content.
 * @returns {Promise<Result>} - A promise that resolves with the analysis result.
 */
export function Analysis(options: AnalysisOptions): Promise<Result>;