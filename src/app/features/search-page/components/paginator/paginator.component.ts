import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {

  @Output() paginateEvent = new EventEmitter<number>();

  public pageAll: number;
  public pageCurrent: number;
  public totalResults: number;

  private moviePerPage:number = 10;
    
  constructor() {
    this.pageAll = 1;
    this.pageCurrent = 1;
    this.totalResults = 0;
  }

  ngOnInit(): void {
    
  }

  setTotalResults(totalResults: number){
    this.pageCurrent = 1;
    this.totalResults = totalResults;
    this.setPageAll();
  }

  setPageAll(){
    this.pageAll = Math.ceil(this.totalResults / this.moviePerPage);
  }

  prevPage(){
    if(this.pageCurrent > 1){
      this.pageCurrent--;
      this.paginateEvent.emit(this.pageCurrent);
    }
  }
  nextPage(){
    if(this.pageCurrent < this.pageAll){
      this.pageCurrent++;
      this.paginateEvent.emit(this.pageCurrent);
    }
  }
  choosePage(){
    if((this.pageCurrent <= this.pageAll) && (this.pageCurrent > 0)){
      this.paginateEvent.emit(this.pageCurrent);
    }
  }

}
