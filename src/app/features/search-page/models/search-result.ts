import { Movie } from "./movie";

export class SearchResult {
    constructor(response: string, search: Movie[], totalResults: number) {
        this._Response = response;
        this._Search = search;
        this._totalResults = totalResults;
    }

    private _Response: string;   
    private _totalResults: number;
    private _Search: Movie[];


    public get Response(): string {
        return this._Response;
    }
    public set Response(value: string) {
        this.Response = value;
    }
    public get totalResults(): number {
        return this._totalResults;
    }
    public set totalResults(value: number) {
        this._totalResults = value;
    }
    public get Search(): Movie[] {
        return this._Search;
    }
    public set Search(value: Movie[]) {
        this._Search = value;
    }
 /*   setResponse(value:boolean){
        this.Response = value;
    }
    setTotalResults(value:number){
        this.totalResults = value;
    }
    setSearch(value:Movie[]){
        this.Search = value;
    }

    getResponse():boolean{
        return this.Response;
    }
    getTotalResult():number{
        return this.totalResults;
    }
    getSearch():Movie[]{
        return this.Search;
    } */

}