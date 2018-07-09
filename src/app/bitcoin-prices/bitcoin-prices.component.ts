import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bitcoin-prices',
  templateUrl: './bitcoin-prices.component.html',
  styleUrls: ['./bitcoin-prices.component.css'],
  template: `
    <label>Fecha de inicio</label>
    <input type="datetime-local" [(ngModel)]="start_date">
    <label>Fecha final</label>
    <input type="datetime-local" [(ngModel)]="end_date">
    <button (click)="setDate()">Set value</button>
  `,

})
export class BitcoinPricesComponent implements OnInit {
  public start_date;
  public end_date;
  public part1;
  setDate() {
    console.log(this.start_date, 'inicio', this.end_date, 'fin');
  }
  constructor(
  ) { }

  ngOnInit() {
  }

}
