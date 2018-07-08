import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bitcoin-prices',
  templateUrl: './bitcoin-prices.component.html',
  styleUrls: ['./bitcoin-prices.component.css']
})
export class BitcoinPricesComponent implements OnInit {
  public newDate;

  constructor() {
    this.newDate = new Date(2017, 4, 12);
  }

  ngOnInit() {
  }

}
