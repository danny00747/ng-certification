import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'convertDate'
})
export class ConvertDatePipe implements PipeTransform {

    transform(value: number): string {
        return new Date(value * 1000).toLocaleString('en-US', {
            day: '2-digit',
            weekday: 'long',
            month: 'short',
        });
    }
}
