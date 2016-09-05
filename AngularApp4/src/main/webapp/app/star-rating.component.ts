/**
 * Star Rating Component to display star rating of product
 */

import { Component, Input, Output, EventEmitter } from 'angular2/core'; 

 
@Component({
	selector: 'star-rating',
	templateUrl: 'star-rating.html'
}) 
 
export class StarRatingComponent{
	
	@Input() rating: number;
	@Output() notify: EventEmitter<string> = new EventEmitter<string>();
	
	constructor(){
	}
	
	onNotify(): void{
		this.notify.emit("clicked rating : " + this.rating);
	}  
	
}