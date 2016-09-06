/**
 * ProductFilterPipe for filtering the productList
 */

import {Pipe, PipeTransform, Injectable} from '@angular/core';
import {Product} from './Product'

@Pipe({
    name: ' productFilter'
})
@Injectable()
export class ProductFilterPipe implements PipeTransform {

    public transform(arg: string): number {
        console.log('ProductFilterPipe is executing + arg');
        return 10;
    }
}