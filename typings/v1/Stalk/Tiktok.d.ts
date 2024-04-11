import Result from "../../utils/Result";

export interface AnalysisOptions {
    version: number;
    username: string;
}

/**
 * Analyze TikTok account based on the specified options.
 * @param {AnalysisOptions} options - The options for analyzing TikTok account.
 * @returns {Promise<Result>} - A promise that resolves with the analysis result.
 */
export function Analysis(options: AnalysisOptions): Promise<Result>;