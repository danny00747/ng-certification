export abstract class CacheService {
    protected getItem(key: string): string {
        return localStorage.getItem(key);
    }

    protected setItem(key: string, data: object | string) {
        (typeof data === 'string') ? localStorage.setItem(key, data) : localStorage.setItem(key, JSON.stringify(data));
    }

    protected removeItem(key: string) {
        localStorage.removeItem(key);
    }

    protected removeValue(key: string, value: string) {
        const items =  this.getItem(key).split(',');
        items.splice(items.indexOf(value, 1));
        this.setItem(key, items.toString());
    }

    protected clear() {
        localStorage.clear();
    }
}
