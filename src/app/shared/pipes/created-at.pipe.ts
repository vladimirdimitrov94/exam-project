import { Pipe, PipeTransform } from '@angular/core';
import moment from 'moment';

@Pipe({
  name: 'createdAt',
  standalone: true
})
export class CreatedAtPipe implements PipeTransform {

  transform(date: string, ...args: unknown[]): unknown {
    return moment(new Date(date).toISOString()).fromNow();
  }
}

