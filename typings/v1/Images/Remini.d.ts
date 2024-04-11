import Result from "../../utils/Result";

export interface GenerateOptions {
    model: "Attach" | "Url";
    image: string;
}

export namespace Random {
    /**
     * Enhance image based on the specified options.
     * @param {GenerateOptions} options - The options for enhance image.
     * @returns {Promise<Result>} - A promise that resolves with the enhance image.
     */
    export function Generate(options: GenerateOptions): Promise<Result>;
}

export namespace HDR {
    /**
     * Enhance HDR image based on the specified options.
     * @param {GenerateOptions} options - The options for generating HDR image.
     * @returns {Promise<Result>} - A promise that resolves with the generated HDR image.
     */
    export function Generate(options: GenerateOptions): Promise<Result>;
}

export namespace Recolor {
    /**
     * Enhance recolored image based on the specified options.
     * @param {GenerateOptions} options - The options for generating recolored image.
     * @returns {Promise<Result>} - A promise that resolves with the generated recolored image.
     */
    export function Generate(options: GenerateOptions): Promise<Result>;
}

export namespace Dehaze {
    /**
     * Enhance dehazed image based on the specified options.
     * @param {GenerateOptions} options - The options for generating dehazed image.
     * @returns {Promise<Result>} - A promise that resolves with the generated dehazed image.
     */
    export function Generate(options: GenerateOptions): Promise<Result>;
}