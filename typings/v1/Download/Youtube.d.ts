export class Youtube {
    Play: (query: string) => Promise<any>;
    MP3: (url: string) => Promise<any>;
    MP4: (url: string) => Promise<any>;
}