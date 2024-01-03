export class Youtube {
    PlayMp3: (query: string) => Promise<any>;
    PlayMp4: (query: string) => Promise<any>;
    Mp3: (url: string) => Promise<any>;
    Mp4: (url: string) => Promise<any>;
    Short: (url: string) => Promise<any>;
}