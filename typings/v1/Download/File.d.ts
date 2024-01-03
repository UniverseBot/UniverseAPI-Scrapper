export class File {
    SFileMobiSearch: (query: string) => Promise<any>;
    SFileMobi: (url: string) => Promise<any>;
    ZippyShare: (url: string) => Promise<any>;
    MediaFire: (url: string) => Promise<any>;
    Apkdl: (url: string) => Promise<any>;
    GoogleDrive: (url: string) => Promise<any>;
    Gore: (url: string) => Promise<any>;
}