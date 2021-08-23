import { SearchParameter } from './../../models/search-parameter';
import { PaginatorComponent } from './../paginator/paginator.component';
import { DetailedMovie } from './../../models/detailed-movie';
import { SearchMoviesService } from './../../services/search-movies.service';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { SearchBarComponent } from '../search-bar/search-bar.component';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit, OnDestroy {

  constructor(private searchMovieService: SearchMoviesService) {
    this.detailedMovies = new Array<DetailedMovie>();
    this.moviesLoaded = false;
  }

  public detailedMovies: DetailedMovie[];
  public moviesLoaded: boolean;

  private getSearchedMoviesSub!: Subscription;
  private getMovieSub!: Subscription;

  @ViewChild(PaginatorComponent)
  private paginator!: PaginatorComponent;

  @ViewChild(SearchBarComponent)
  private searchBar!: SearchBarComponent;

  ngOnInit(): void {
  }

  getMoviesByTitle(title: string){
    this.detailedMovies = new Array<DetailedMovie>();
    this.getSearchedMoviesSub = this.searchMovieService.searchMovieByTitle(title).subscribe((data) => {
      if(data.Response == "True"){
        data.Search.forEach(item => {
          this.getDetailedMoviesById(item.imdbID);
          this.moviesLoaded = true;
        });
        this.setTotalNumberOfMovies(data.totalResults);
      }else{
        this.moviesLoaded = false;
        this.unsubscribeIfEmpty(title);
        this.setTotalNumberOfMovies(0);
      }
      console.log(this.detailedMovies);
    });
  }
  getMoviesByTitleWithPage(title:string,page:number){
    this.detailedMovies = new Array<DetailedMovie>();
    this.getSearchedMoviesSub = this.searchMovieService.searchMovieByTitleWithPage(title,page).subscribe((data) => {
      data.Search.forEach(item => {
        this.getDetailedMoviesById(item.imdbID);
        this.moviesLoaded = true;
      });
      console.log(this.detailedMovies);
    });
  }

  getDetailedMoviesById(imdbID: number){
    this.getMovieSub = this.searchMovieService.getMovieById(imdbID).subscribe((data) => {
      this.detailedMovies.push(data);
    })  
  }

  getMoviesFromOtherPage(page: number){
    this.getMoviesByTitleWithPage(this.searchBar.getCurrentTitle(),page);
  }

  setTotalNumberOfMovies(movieCount: number){
    this.paginator.setTotalResults(movieCount);
  }



  unsubscribeIfEmpty(title:string){
    this.getSearchedMoviesSub.unsubscribe();
    this.getMovieSub.unsubscribe();
    console.log("UNSUB");
  } 
  ngOnDestroy(){
    if(!this.getSearchedMoviesSub.closed){
      this.getSearchedMoviesSub.unsubscribe();
    }
    if(!this.getMovieSub.closed){
      this.getMovieSub.unsubscribe();
    }
  }

}
