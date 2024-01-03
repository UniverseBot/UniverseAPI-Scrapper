export class Remini {
    Attach: (image: string) => Promise<any>;
    Url: (image: string) => Promise<any>;
    HdrAttach: (image: string) => Promise<any>;
    HdrUrl: (image: string) => Promise<any>;
    RecolorAttach: (image: string) => Promise<any>;
    RecolorUrl: (image: string) => Promise<any>;
    DehazeAttach: (image: string) => Promise<any>;
    DehazeUrl: (image: string) => Promise<any>;
}