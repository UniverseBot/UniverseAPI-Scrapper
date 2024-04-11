import Result from "../../utils/Result";

export interface AnalysisOptions {
    version: number;
    url: string;
}

/**
 * Analyze tweet from Twitter based on the specified options.
 * @param {AnalysisOptions} options - The options for analyzing tweet from Twitter.
 * @returns {Promise<Result>} - A promise that resolves with the analysis result.
 */
export function Analysis(options: AnalysisOptions): Promise<Result>;