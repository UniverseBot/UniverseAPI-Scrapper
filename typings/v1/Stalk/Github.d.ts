export class GitHub {
    User: (username: string) => Promise<any>;
    Repository: (query: string) => Promise<any>;
}