import {Pipe, PipeTransform} from '@angular/core';
import {DatePipe} from '@angular/common';
@Pipe({ name: 'customDatePipe' })
export class CustomDatePipeService implements PipeTransform {
  constructor() { }
  transform(date: Date | string, format: string = 'dd-MM-yyyy'): string {
    date = new Date(date);
    return new DatePipe('en-US').transform(date, format)!;
  }
}