import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class MarvelService {
  urlSearch; 



  private baseUrl: string = "http://gateway.marvel.com/v1/public/characters?limit=50&ts=1&apikey=45ffc7a588682b67fca8b6fd6a866bcb&hash=1b9b9c66cd69a13c4a32ee739962a948";

  constructor(private http: Http) { }

  getHeroInfo(): Observable<any> {
    return this.http.get(this.baseUrl)
    .map(result => {
      return result.json()
    })
  }

  getHeroSearch(searchTerm): Observable<any> {
    return this.http.get(this.baseUrl + searchTerm)
    .map(result => {
      return result.json()
    })
  }
}

  
