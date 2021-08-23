export class Rating {
    constructor(source: string, value: string) {
        this._Source = source;
        this._Value = value;
    }

    private _Source: string;
    public get Source() {
        return this._Source;
    }
    public set Source(value) {
        this._Source = value;
    }
    private _Value:string;
    public get Value() {
        return this._Value;
    }
    public set Value(value) {
        this._Value = value;
    }
}