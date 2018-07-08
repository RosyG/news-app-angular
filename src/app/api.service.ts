import { Injectable } from '@angular/core';
import {Http, HttpModule} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class ApiService {
  constructor(private http: Http) { }
  getNews() {
    return  this.http.get('http://node-hnapi.herokuapp.com/news')
              .map(res => res.json());
  }
}
