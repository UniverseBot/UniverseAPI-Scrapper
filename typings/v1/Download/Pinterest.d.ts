import Result from "../../utils/Result";

export namespace Video {
    export interface AnalysisOptions {
        version: number;
        url: string;
    }

    /**
     * Download video from Pinterest based on the specified options.
     * @param {AnalysisOptions} options - The options for analyzing video from Pinterest.
     * @returns {Promise<Result>} - A promise that resolves with the analysis result.
     */
    export function Analysis(options: AnalysisOptions): Promise<Result>;
}