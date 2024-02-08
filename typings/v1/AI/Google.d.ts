export class Gemini {
    Pro: (prompt: string) => Promise<any>;
    ProVisionModelAttach: (image: string, prompt: string) => Promise<any>;
    ProVisionModelUrl: (image: string, prompt: string) => Promise<any>;
}

export class Bard {
    Model1: (prompt: string) => Promise<any>;
    Model2Image: (url: string, prompt: string) => Promise<any>;
}