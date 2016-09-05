/**
 * Product Service with product data and logic
 */
import { Injectable, OnInit } from 'angular2/core';
import { Product } from './Product';


@Injectable()
export class ProductService{
	
	productList: Product[];
	
	constructor(){
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
	
	getProducts(): Product[]{
		return this.productList;
	}
		 	
}