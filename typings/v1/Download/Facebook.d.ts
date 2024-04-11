import Result from "../../utils/Result";

export interface AnalysisOptions {
    version: number;
    url: string;
}

/**
 * Download content from Facebook models based on the specified options.
 * @param {AnalysisOptions} options - The options for analyzing content using Facebook models.
 * @returns {Promise<Result>} - A promise that resolves with the analysis result.
 */
export function Analysis(options: AnalysisOptions): Promise<Result>;