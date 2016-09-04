import { Component } from 'angular2/core';

@Component({
	selector: 'product-list',
	templateUrl: 'product-list.html',
})

export class ProductListComponent{
	
	productList: any[];
	filterBy: string;
	
	constructor(){
		this.title = "Product List";
	}
	
	ngOnInit(){
		this.productList = [{
			productId: '1001',
			name: 'Dettol Soap',
			code: 'PROD1001',
			price: 25.00,
			available: 10
		},{
			productId: '1002',
			name: 'Dabar Hair Oil',
			code: 'PROD1002',
			price: 50.00,
			available: 5
		}];
	}
	
	filterList(): void{
		console.log(this.filterBy);	
	}
	
}