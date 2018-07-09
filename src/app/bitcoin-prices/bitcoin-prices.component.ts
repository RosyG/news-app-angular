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

export class BitcoinPricesComponent {
  // lineChart
  public lineChartData: Array<any> = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'},
    {data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C'}
  ];
  public lineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: any = {
    responsive: true
  };
  public lineChartColors: Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public randomize(): void {
    const _lineChartData: Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.lineChartData = _lineChartData;
  }
  // events
  public chartClicked(e: any): void {
    console.log(e);
  }
  public chartHovered(e: any): void {
    console.log(e);
  }
}

/*
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
*/
// tslint:disable-next-line:max-line-length
/*{"bpi":{"2018-06-01":7518.245,"2018-06-02":7636.1938,"2018-06-03":7711.365,"2018-06-04":7490.59,"2018-06-05":7616.8913,"2018-06-06":7655.9788,"2018-06-07":7688.0038,"2018-06-08":7616.1025,"2018-06-09":7497.3438,"2018-06-10":6765.8013,"2018-06-11":6877.1825,"2018-06-12":6548.33,"2018-06-13":6299.5225,"2018-06-14":6637.7388,"2018-06-15":6410.7225,"2018-06-16":6485.8688,"2018-06-17":6443.6725,"2018-06-18":6709.48,"2018-06-19":6737.4138,"2018-06-20":6758.3788},"disclaimer":"This data was produced from the CoinDesk Bitcoin Price Index. BPI value data returned as USD.","time":{"updated":"Jun 21, 2018 00:03:00 UTC","updatedISO":"2018-06-21T00:03:00+00:00"}} */
