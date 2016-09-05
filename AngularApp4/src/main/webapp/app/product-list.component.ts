/**
 * Product list components for diplaysing productList and filtering the productList
 */
 import { Component } from 'angular2/core';
 import { Product } from './product';
 import { ProductFilterPipe } from './product-filter.pipe';
 
 @Component({
 	selector: 'product-list',
 	templateUrl: 'product-list.html',
 	pipes: [ProductFilterPipe]
 })
 
 export class ProductListComponent{
 		
 		productList: Product[];
 		title: string;
 		filterBy: string;
 		
 		constructor(){
 			this.title = "Product List";
 		}
 		
 		ngOnInit(){
 			this.productList = [{
 				productId: 1001,
 				productName: 'Dettol Soap',
 				productCode: 'PROD1001',
 				description: 'dettol soap',
 				price: 25.00,
 				available: 50,
 				rating: 5
 			},{
 				productId: 1002,
 				productName: 'Dabur Hair Oil',
 				productCode: 'PROD1002',
 				description: 'natural hail oil by dabur',
 				price: 50.00,
 				available: 10,
 				rating: 4
 			},{
 				productId: 1003,
 				productName: 'Lifeboy Soap',
 				productCode: 'PROD1003',
 				description: 'lifeboy soap kare kitanu ka naash',
 				price: 18.50,
 				available: 20,
 				rating: 3.5
 			}];
 		}
 }
