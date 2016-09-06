import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'multiply' })
export class MultiplyPipe implements PipeTransform {
    transform(value: number, arg: string): number {
        let multiplier = parseFloat(arg);
        return value * multiplier;
    }
}