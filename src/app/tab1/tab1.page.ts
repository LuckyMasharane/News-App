import { Component } from '@angular/core';
import { NewsfeedService } from '../newsfeed.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  articles: any

  constructor(private newsService: NewsfeedService) { 
    this.loadNews()
  }

  loadNews(){
    this.newsService.getNews("top-headlines?country=us").subscribe( news => {
      this.articles = news['articles'];
      console.log(this.articles);
      
    })
  }

}
