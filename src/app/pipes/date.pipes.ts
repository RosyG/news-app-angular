import { Pipe, PipeTransform } from '@angular/core';

@Pipe ({ name: 'dateInput' })

export class DatePipe implements PipeTransform {
  transform (startDate, endDate) {
    // tslint:disable-next-line:radix
    const start_date = parseInt(startDate);
    // tslint:disable-next-line:radix
    const end_date = parseInt(endDate);
    return 'Result ' + (start_date * end_date);
  }
}
