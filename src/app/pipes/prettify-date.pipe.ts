import { Pipe, PipeTransform } from '@angular/core';
import { DateTime } from "luxon";

const dateFormat = 'HH:mm - dd. LLL yyyy';
const prettifyDate = (date: Date) => DateTime.fromJSDate(new Date(date)).toFormat(dateFormat);


@Pipe({
  name: 'prettifyDate'
})
export class PrettifyDatePipe implements PipeTransform {

  transform = (date: Date): string => {
    let pretty = prettifyDate(date);
    console.log("PrettifyDatePipe => ", pretty);
    return pretty;
  }
}

