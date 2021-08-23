import { ColorInterpolationService } from './../../../../core/services/color-interpolation.service';
import { DetailedMovie } from './../../models/detailed-movie';
import { MatCardModule } from '@angular/material/card';
import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  @Input() movie!: DetailedMovie;

  public flipped: boolean = false;

  constructor(private colorInterpolationService: ColorInterpolationService) { }

  ngOnInit(): void {
  }

  public isFlipped() {
    return this.flipped;
  }
  public flipCard(){
    this.flipped = !this.flipped;
  }

  getColor(){
    
  }

  hasPoster():boolean {
    let returnValue: boolean = false;
    if(this.movie.Poster != "N/A"){
      returnValue = true;
    }
    return returnValue;
  }

  getColorForRating(){
    //console.log(this.colorInterpolationService.getRatingColor(this.movie.imdbRating));
    return this.colorInterpolationService.getRatingColor(this.movie.imdbRating);
  }

}
