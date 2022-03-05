export abstract class CacheService {
    protected getItem(key: string): string {
        return localStorage.getItem(key);
    }

    protected setItem(key: string, data: object | string) {
        (typeof data === 'string') ? localStorage.setItem(key, data) : localStorage.setItem(key, JSON.stringify(data));
    }

    protected removeItem(key: string) {
        localStorage.removeItem(key)
    }

    protected clear() {
        localStorage.clear()
    }
}
