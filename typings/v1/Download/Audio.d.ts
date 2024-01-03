export class Audio {
    SoundCloud1: (url: string) => Promise<any>;
    SoundCloud2: (url: string) => Promise<any>;
    Ringtone: (query: string) => Promise<any>;
    SoundOfText: (text: string, language: string) => Promise<any>;
    Joox: (query: string) => Promise<any>;
}