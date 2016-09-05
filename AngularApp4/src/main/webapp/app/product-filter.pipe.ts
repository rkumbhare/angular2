/**
 * ProductFilterPipe for filtering the productList
 */

import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({
	name:'productFilter'
})
 
 export class ProductFilterPipe implements PipeTransform{
 	
 	transform(value: Product[], args: string[]): Product[]{
 		let filterBy = args[0] ? args[0].toLocaleLowerCase() : null;
 		if(filterBy){
 			return value.filter((product: Product) => product.productName.toLocaleLowerCase().indexOf(filterBy) != -1);
 		}else{
 			return value;
 		}
 	}
 }