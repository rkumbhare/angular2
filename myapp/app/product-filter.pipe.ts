import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'productFilter' })
export class ProductFilterPipe implements PipeTransform {
    transform(value: any[], arg: string): any[] {
        console.log("ProductFilterPipe is executing " + arg);
        if (arg) {
            arg = arg.toLocaleLowerCase();
            return value.filter((product: any) => product.productName.toLocaleLowerCase().indexOf(arg) != -1);
        }
        return value;
    }
}