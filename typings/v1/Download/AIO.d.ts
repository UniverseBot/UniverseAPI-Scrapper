import Result from "../../utils/Result";

export type ModelOptions = "IFunny" | "ImDB" | "Cocofun" | "LineSticker";

export interface AnalysisOptions {
    model: ModelOptions;
    url: string;
}

/**
 * Download an media based on the specified options.
 * @param {DownloadOptions} options - The options for downloading the media.
 * @returns {Promise<Result>} - A promise that resolves with the downloaded media.
 */
export function Analysis(options: AnalysisOptions): Promise<Result>;