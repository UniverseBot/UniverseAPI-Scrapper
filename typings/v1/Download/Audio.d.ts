import Result from "../../utils/Result";

export namespace SoundCloud {
    export interface AnalysisOptions {
        version: number;
        url: string;
    }

    /**
     * Analyze audio from SoundCloud based on the specified options.
     * @param {AnalysisOptions} options - The options for analyzing audio from SoundCloud.
     * @returns {Promise<Result>} - A promise that resolves with the analysis result.
     */
    export function Analysis(options: AnalysisOptions): Promise<Result>;
}

export namespace Ringtone {
    export interface AnalysisOptions {
        version: number;
        query: string;
    }

    /**
     * Analyze audio for a ringtone based on the specified options.
     * @param {AnalysisOptions} options - The options for analyzing audio for a ringtone.
     * @returns {Promise<Result>} - A promise that resolves with the analysis result.
     */
    export function Analysis(options: AnalysisOptions): Promise<Result>;
}

export namespace Ntts {
    export interface GenerateOptions {
        version: number;
        text: string;
        language: string;
    }

    /**
     * Generate audio using Ntts (Sound of Text) based on the specified options.
     * @param {GenerateOptions} options - The options for generating audio using Ntts.
     * @returns {Promise<Result>} - A promise that resolves with the generated audio.
     */
    export function Generate(options: GenerateOptions): Promise<Result>;
}

export namespace Joox {
    export interface GenerateOptions {
        version: number;
        query: string;
    }

    /**
     * Generate audio from Joox based on the specified options.
     * @param {GenerateOptions} options - The options for generating audio from Joox.
     * @returns {Promise<Result>} - A promise that resolves with the generated audio.
     */
    export function Generate(options: GenerateOptions): Promise<Result>;
}