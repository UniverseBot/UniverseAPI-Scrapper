import Result from "../../utils/Result";

export namespace Reels {
    export interface AnalysisOptions {
        version: number;
        url: string;
    }

    /**
     * Download reels from Instagram based on the specified options.
     * @param {AnalysisOptions} options - The options for analyzing reels from Instagram.
     * @returns {Promise<Result>} - A promise that resolves with the analysis result.
     */
    export function Analysis(options: AnalysisOptions): Promise<Result>;
}

export namespace Stories {
    export interface AnalysisOptions {
        version: number;
        username: string;
    }

    /**
     * Download stories from Instagram based on the specified options.
     * @param {AnalysisOptions} options - The options for analyzing stories from Instagram.
     * @returns {Promise<Result>} - A promise that resolves with the analysis result.
     */
    export function Analysis(options: AnalysisOptions): Promise<Result>;
}