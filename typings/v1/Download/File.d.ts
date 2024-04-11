import Result from "../../utils/Result";

export interface AnalysisOptions {
    version: number;
    url: string;
}

export namespace GoogleDrive {
    /**
     * Download file from Google Drive based on the specified options.
     * @param {AnalysisOptions} options - The options for analyzing file from Google Drive.
     * @returns {Promise<Result>} - A promise that resolves with the analysis result.
     */
    export function Analysis(options: AnalysisOptions): Promise<Result>;
}

export namespace MediaFire {
    /**
     * Download file from MediaFire based on the specified options.
     * @param {AnalysisOptions} options - The options for analyzing file from MediaFire.
     * @returns {Promise<Result>} - A promise that resolves with the analysis result.
     */
    export function Analysis(options: AnalysisOptions): Promise<Result>;
}

export namespace SFileMobiSearch {
    export interface AnalysisOptions {
        version: number;
        query: string;
    }

    /**
     * Download file from SFileMobiSearch based on the specified options.
     * @param {AnalysisOptions} options - The options for analyzing file from SFileMobiSearch.
     * @returns {Promise<Result>} - A promise that resolves with the analysis result.
     */
    export function Analysis(options: AnalysisOptions): Promise<Result>;
}

export namespace SFileMobiDownload {
    /**
     * Download file from SFileMobiDownload based on the specified options.
     * @param {AnalysisOptions} options - The options for analyzing file from SFileMobiDownload.
     * @returns {Promise<Result>} - A promise that resolves with the analysis result.
     */
    export function Analysis(options: AnalysisOptions): Promise<Result>;
}

export namespace APKDL {
    /**
     * Download file from APKDL based on the specified options.
     * @param {AnalysisOptions} options - The options for analyzing file from APKDL.
     * @returns {Promise<Result>} - A promise that resolves with the analysis result.
     */
    export function Analysis(options: AnalysisOptions): Promise<Result>;
}

export namespace Gore {
    /**
     * Download file from Gore based on the specified options.
     * @param {AnalysisOptions} options - The options for analyzing file from Gore.
     * @returns {Promise<Result>} - A promise that resolves with the analysis result.
     */
    export function Analysis(options: AnalysisOptions): Promise<Result>;
}

export namespace ZippyShare {
    /**
     * Download file from ZippyShare based on the specified options.
     * @param {AnalysisOptions} options - The options for analyzing file from ZippyShare.
     * @returns {Promise<Result>} - A promise that resolves with the analysis result.
     */
    export function Analysis(options: AnalysisOptions): Promise<Result>;
}