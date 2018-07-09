import { Pipe, PipeTransform } from '@angular/core';

@Pipe ({ name: 'dateInput' })

export class DatePipe implements PipeTransform {
  transform (n1, n2) {
    // tslint:disable-next-line:radix
    const n_1 = parseInt(n1);
    // tslint:disable-next-line:radix
    const n_2 = parseInt(n2);
    return 'Result ' + (n_1 * n_2);
  }
}
