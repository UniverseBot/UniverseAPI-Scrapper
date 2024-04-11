import Result from "../../utils/Result";

export interface AnalysisOptions {
    version: number;
    url: string;
}

export namespace XNXX {
    /**
     * Analyze audio from XNXX based on the specified options.
     * @param {AnalysisOptions} options - The options for analyzing audio from XNXX.
     * @returns {Promise<Result>} - A promise that resolves with the analysis result.
     */
    export function Analysis(options: AnalysisOptions): Promise<Result>;
}

export namespace XVideos {
    /**
     * Analyze audio from XVideos based on the specified options.
     * @param {AnalysisOptions} options - The options for analyzing audio from XVideos.
     * @returns {Promise<Result>} - A promise that resolves with the analysis result.
     */
    export function Analysis(options: AnalysisOptions): Promise<Result>;
}