import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-bitcoin-prices',
  templateUrl: './bitcoin-prices.component.html',
  styleUrls: ['./bitcoin-prices.component.css'],
  template: `
    <label>Fecha de inicio</label>
    <input type="date" [(ngModel)]="start_date">
    <label>Fecha final</label>
    <input type="date" [(ngModel)]="end_date">
    <button (click)="setDate()">Set value</button>
  `,
  providers: [ApiService]
})
export class BitcoinPricesComponent implements OnInit {
  public start_date;
  public end_date;
  public dataBit;
  errorMessage: any;
  constructor(
    private  apiService:  ApiService
  ) {
    this.apiService.getBitcoin(this.start_date, this.end_date)
    .subscribe(
      result => {
        this.dataBit = result;
      },
      error => {
        this.errorMessage = <any>error;

        if (this.errorMessage !== null) {
            alert('Error');
        }
      }
    );
   }

  ngOnInit() {
  }

}
