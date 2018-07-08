import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-hacker-news',
  templateUrl: './hacker-news.component.html',
  styleUrls: ['./hacker-news.component.css'],
  providers: [ApiService]
})
export class HackerNewsComponent {
  public news;
  errorMessage: any;
  constructor(private  apiService:  ApiService) {
    this.apiService.getNews()
                    .subscribe(
                      result => {
                        this.news = result;
                      },
                      error => {
                        this.errorMessage = <any>error;

                        if (this.errorMessage !== null) {
                            alert('Error');
                        }
                      }
                    );
  }

}
