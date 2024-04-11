import Result from "../../utils/Result";

export interface AnalysisOptions {
    version: number;
    url: string;
}

/**
 * Analyze image score based on the specified options.
 * @param {AnalysisOptions} options - The options for analyzing the image score.
 * @returns {Promise<Result>} - A promise that resolves with the analyzed image score.
 */
export function Analysis(options: AnalysisOptions): Promise<Result>;