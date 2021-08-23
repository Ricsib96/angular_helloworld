export class Movie {
    constructor(title:string, year:number, imdbID:number, type:string, poster:string){
        this._Title = title;
        this._Year = year;
        this._imdbID = imdbID;
        this._Type = type;
        this._Poster = poster;
    }

    protected _Title: string;
    public get Title(): string {
        return this._Title;
    }
    public set Title(value: string) {
        this._Title = value;
    }
    protected _Year: number;
    public get Year(): number {
        return this._Year;
    }
    public set Year(value: number) {
        this._Year = value;
    }
    protected _imdbID: number;
    public get imdbID(): number {
        return this._imdbID;
    }
    public set imdbID(value: number) {
        this._imdbID = value;
    }
    protected _Type: string;
    public get Type(): string {
        return this._Type;
    }
    public set Type(value: string) {
        this._Type = value;
    }
    protected _Poster: string;
    public get Poster(): string {
        return this._Poster;
    }
    public set Poster(value: string) {
        this._Poster = value;
    }
    protected _actors!: string;
    public get Actors(): string {
        return this._actors;
    }
    public set Actors(value: string) {
        this._actors = value;
    }

}