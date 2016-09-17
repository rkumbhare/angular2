import {Component, Input, Output, EventEmitter} from '@angular/core';
	
import {Product} from './Product';

@Component({
	selector: 'product-info',
	templateUrl: 'app/product-info.html'
})
export class ProductInfoComponent{
	
	@Input() product: Product;
	@Output() closePanel: EventEmitter = new EventEmitter();
	
	constructor(){
		
	}
	
	close(){
		this.closePanel.emit("close product info panel");
	}
}