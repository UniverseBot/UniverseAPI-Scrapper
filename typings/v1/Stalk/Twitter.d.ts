import Result from "../../utils/Result";

export interface AnalysisOptions {
    version: number;
    username: string;
}

/**
 * S Twitter account based on the specified options.
 * @param {AnalysisOptions} options - The options for analyzing Twitter account.
 * @returns {Promise<Result>} - A promise that resolves with the analysis result.
 */
export function Analysis(options: AnalysisOptions): Promise<Result>;