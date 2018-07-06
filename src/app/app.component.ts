import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  // private apiUrl = 'http://node-hnapi.herokuapp.com/news';
  // news: any = {};
  constructor () {
    // console.log('test');
    // this.getNews ();
    // this.getData ();
  }

  // getData () {
  //   return this.http.get(this.apiUrl)
  //           .map((res: Response) => res.json());
  // }
  // getNews () {
  //   this.getData().subscribe(data => {
  //     console.log(data);
  //     this.news = data;
  //   });
  // }
}
