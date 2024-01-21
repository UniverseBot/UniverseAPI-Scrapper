export class Gemini {
    Pro: (promt: string) => Promise<any>;
    ProVisionModelAttach: (image: string, promt: string) => Promise<any>;
    ProVisionModelUrl: (image: string, promt: string) => Promise<any>;
}

export class Bard {
    Model1: (promt: string) => Promise<any>;
    Model2Image: (url: string, promt: string) => Promise<any>;
}