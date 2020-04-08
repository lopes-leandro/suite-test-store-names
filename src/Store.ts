export class Store<T> {
    private _db: T[] = [];

    constructor(initialData: Array<T> = []) {
        this._db.push(...initialData);
    }

    push(val: T) {
        this._db.push(val);
    }

    pop(): T | undefined {
        return this._db.pop();
    }

    shift(): T | undefined {
        return this._db.shift();
    }

    isEmpty(): boolean {
        return this.size() === 0;
    }

    size(): number {
        return this._db.length;
    }
}