/**
 * to display start-rating of the product
 */
 import { Component, Input} from '@angular/core';
 
 
 @Component({
 	selector: 'star-rating',
 	templateUrl: 'app/star-rating.html'
 })
 export class StarRatingComponent{
 	
 	@Input() rating: number;
 	
 	constructor(){
 		
 	}
 	
 }
