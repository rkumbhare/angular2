/**
 * New Product create
 */
 
 import { Component } from '@angular/core';
 
 
 @Component({
 	selector: 'product-add',
 	templateUrl: 'product-add.html';
 })
 
 export class ProductAddComponent{
 	
 	private title: string;
 	
 	constructor(){
 		this.title = "New Product";
 	}
 	
 }
