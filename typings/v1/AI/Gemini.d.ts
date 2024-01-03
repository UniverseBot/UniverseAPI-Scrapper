export class Gemini {
    Pro: (promt: string) => Promise<any>;
    ProVisionModelAttach: (image: string, promt: string) => Promise<any>;
    ProVisionModelUrl: (image: string, promt: string) => Promise<any>;
}