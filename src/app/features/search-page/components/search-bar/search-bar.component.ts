import { SearchParameter } from './../../models/search-parameter';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  public inputText = "";
  private currentTitle = "";

  @Input() moviesLoaded!: boolean;
  @Output() searchEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  searchMovieByTitle(){
    this.currentTitle = this.inputText + "*";
    this.searchEvent.emit(this.currentTitle);
  }

  getCurrentTitle():string {
    return this.currentTitle;
  }

}
