import { Movie } from "./movie"
import { Rating } from "./rating";

export class DetailedMovie extends Movie {
    constructor(title:string, year:number, imdbID:number, type:string, poster:string, actors: string,
                awards: string, boxoffice: string, country: string, dvd: string, director: string, 
                genre: string, language: string, metascore: number, plot: string, production: string,
                rated: string, ratings: Rating[], released: string, response: boolean, runtime: string,
                website: string, writer: string, imdbrating: number, imdbvotes: number){
        super(title,year,imdbID,type,poster);
        this._Actors = actors;
        this._Awards = awards;
        this._BoxOffice = boxoffice;
        this._Genre = genre;
        this._Country = country;
        this._DVD = dvd;
        this._Director = director;
        this._Language = language;
        this._Metascore = metascore;
        this._Plot = plot;
        this._Production = production;
        this._Rated = rated;
        this._Ratings = ratings;
        this._Released = released;
        this._Response = response;
        this._Runtime = runtime;
        this._Website = website;
        this._Writer = writer;
        this._imdbRating = imdbrating;
        this._imdbVotes = imdbvotes;
    }

    private _Actors: string;
    public get Actors(): string {
        return this._Actors;
    }
    public set Actors(value: string) {
        this._Actors = value;
    }
    private _Awards: string;
    public get Awards(): string {
        return this._Awards;
    }
    public set Awards(value: string) {
        this._Awards = value;
    }
    private _BoxOffice: string;
    public get BoxOffice(): string {
        return this._BoxOffice;
    }
    public set BoxOffice(value: string) {
        this._BoxOffice = value;
    }
    private _Country: string;
    public get Country(): string {
        return this._Country;
    }
    public set Country(value: string) {
        this._Country = value;
    }
    private _DVD: string;
    public get DVD(): string {
        return this._DVD;
    }
    public set DVD(value: string) {
        this._DVD = value;
    }
    private _Director: string;
    public get Director(): string {
        return this._Director;
    }
    public set Director(value: string) {
        this._Director = value;
    }
    private _Genre: string;
    public get Genre(): string {
        return this._Genre;
    }
    public set Genre(value: string) {
        this._Genre = value;
    }
    private _Language: string;
    public get Language(): string {
        return this._Language;
    }
    public set Language(value: string) {
        this._Language = value;
    }
    private _Metascore: number;
    public get Metascore(): number {
        return this._Metascore;
    }
    public set Metascore(value: number) {
        this._Metascore = value;
    }
    private _Plot: string;
    public get Plot(): string {
        return this._Plot;
    }
    public set Plot(value: string) {
        this._Plot = value;
    }
    private _Production: string;
    public get Production(): string {
        return this._Production;
    }
    public set Production(value: string) {
        this._Production = value;
    }
    private _Rated: string;
    public get Rated(): string {
        return this._Rated;
    }
    public set Rated(value: string) {
        this._Rated = value;
    }
    private _Ratings: Rating[];
    public get Ratings(): Rating[] {
        return this._Ratings;
    }
    public set Ratings(value: Rating[]) {
        this._Ratings = value;
    }
    private _Released: string;
    public get Released(): string {
        return this._Released;
    }
    public set Released(value: string) {
        this._Released = value;
    }
    private _Response: boolean;
    public get Response(): boolean {
        return this._Response;
    }
    public set Response(value: boolean) {
        this._Response = value;
    }
    private _Runtime: string;
    public get Runtime(): string {
        return this._Runtime;
    }
    public set Runtime(value: string) {
        this._Runtime = value;
    }
    private _Website: string;
    public get Website(): string {
        return this._Website;
    }
    public set Website(value: string) {
        this._Website = value;
    }
    private _Writer: string;
    public get Writer(): string {
        return this._Writer;
    }
    public set Writer(value: string) {
        this._Writer = value;
    }
    private _imdbRating: number;
    public get imdbRating(): number {
        return this._imdbRating;
    }
    public set imdbRating(value: number) {
        this._imdbRating = value;
    }
    private _imdbVotes: number;
    public get imdbVotes(): number {
        return this._imdbVotes;
    }
    public set imdbVotes(value: number) {
        this._imdbVotes = value;
    }


}