import Result from "../../utils/Result";

export interface AnalysisOptions {
    version: number;
    url: string;
}

export namespace Video {
    /**
     * Analyze video from YouTube based on the specified options.
     * @param {AnalysisOptions} options - The options for analyzing video from YouTube.
     * @returns {Promise<Result>} - A promise that resolves with the analysis result.
     */
    export function Analysis(options: AnalysisOptions): Promise<Result>;
}

export namespace Audio {
    /**
     * Analyze audio from YouTube based on the specified options.
     * @param {AnalysisOptions} options - The options for analyzing audio from YouTube.
     * @returns {Promise<Result>} - A promise that resolves with the analysis result.
     */
    export function Analysis(options: AnalysisOptions): Promise<Result>;
}

export namespace Play {
    export interface AnalysisOptions {
        version: number;
        query: string;
    }

    /**
     * Analyze YouTube playlist based on the specified options.
     * @param {AnalysisOptions} options - The options for analyzing YouTube playlist.
     * @returns {Promise<Result>} - A promise that resolves with the analysis result.
     */
    export function Analysis(options: AnalysisOptions): Promise<Result>;
}