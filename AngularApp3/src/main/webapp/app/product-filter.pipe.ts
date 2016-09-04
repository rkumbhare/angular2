import { Pipe, PipeTransform } from 'angular2/core';

@Pipe({
	name: 'productFilter'
})

export class ProductFilterPipe implements PipeTransform{
	
	transform(value: any[], args: string[]): any[]{
		let filterBy = args[0] ? args[0].toLocaleLowerCase() : null;
		if(filterBy){
			return value.filter((product: any) => product.name.toLocaleLowerCase().indexOf(filterBy)!=-1);
		}else{
			return value;
		}
	} 
	
}