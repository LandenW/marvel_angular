import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchTerm;
  urlSearch;
  
  @Output() searchHeros = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  submitSearch(searchTerm){
    
    this.searchTerm = searchTerm
    this.urlSearch = "&nameStartsWith=" + searchTerm;
    this.searchHeros.emit(this.urlSearch)
  }
}
