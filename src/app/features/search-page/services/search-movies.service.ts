import { DetailedMovie } from './../models/detailed-movie';
import { SearchResult } from './../models/search-result';
import { apiConstants } from './../../../core/constants/api';
import { Observable } from 'rxjs';
import { map,tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchMoviesService {

  constructor(private http: HttpClient) { }

  searchMovieByTitle(title: string): Observable<SearchResult> {
    return this.http.get<SearchResult>(apiConstants.urlWithApiKey + "&s=" + title + "&page=1");
  }

  searchMovieByTitleWithPage(title: string,page: number): Observable<SearchResult> {
    return this.http.get<SearchResult>(apiConstants.urlWithApiKey + "&s=" + title + "&page=" + page);
  }

  getMovieById(id: number): Observable<DetailedMovie> {
    return this.http.get<DetailedMovie>(apiConstants.urlWithApiKey + "&i=" + id);
  }
}
