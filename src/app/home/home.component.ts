import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public texts = ['texto1', 'texto2', 'texto3', 'texto4'];
  in: string;
  constructor() { }

  ngOnInit() {

  }

  fromText(select) {
    console.log(select);
  }
  toText(): void {
    this.in = 'zas';
    console.log(this.in, 'el texto');
  }

}
