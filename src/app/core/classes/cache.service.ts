export abstract class CacheService {
    protected getItem(key: string): string | null {
        return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : null;
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
