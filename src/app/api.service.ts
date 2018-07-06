import { Injectable } from '@angular/core';
// import { HttpClient } from  '@angular/common/http';
// Importamos los componentes que vamos a usar
import {Http, Response, Headers} from '@angular/http';
// import "rxjs/Rx";
import 'rxjs/add/operator/map';
// import {Observable} from "rxjs/internal/Observable";

@Injectable(
  // providedIn: 'root'
)
export class ApiService {
  // private 'http://node-hnapi.herokuapp.com/news' = 'http://node-hnapi.herokuapp.com/news';
  // API_URL  =  'http://localhost:8000';
  // constructor(private httpClient: HttpClient) { }
  constructor(private http: Http) { }

  getNews() {
    return  this.http.get('http://node-hnapi.herokuapp.com/news')
              .map(res => res.json());
  }
}
