import { Component, OnInit } from '@angular/core';
import { MarvelService } from './marvel.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'app';
  heroInfo;


  constructor(private marvelService: MarvelService){}
    
    getDataFromService(){
      this.marvelService.getHeroInfo()
        .subscribe(
          heroInfo => {
              this.heroInfo = heroInfo.data.results;
          }
        )
    }

    ngOnInit(){
      this.getDataFromService();
    }

    getSearch(searchTerm) {
      this.marvelService.getHeroSearch(searchTerm)
      .subscribe(
        heroInfo => {
            this.heroInfo = heroInfo.data.results;
        }
      )

    }
    
}





