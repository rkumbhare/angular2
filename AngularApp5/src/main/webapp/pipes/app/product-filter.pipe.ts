import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'productFilter' })
export class ProductFilterPipe implements PipeTransform {
    transform(value: any[], arg: string): any[] {
        console.log("ProductFilterPipe is executing : " + string);
        return value;
    }
}