/*
*	Container Component
*/

import { Component } from 'angular2/core';
import { ProductListComponent } from './product-list.component';


@Component({
	selector: 'myapp',
	template: "<h2>{{title}}</h2>" +
			  "<h4>{{subTitle}}</h4>" +
			  "<product-list></product-list>",
	directives: [ProductListComponent]		
})
export class AppComponent{
	title: string;
	subTitle: string;
	
	constructor(){
		this.title = "Welcome to Angular2 Application Demo";
		this.subTitle = "Basic Component, Custom Pipes, Nested Component & Input/Output";
	}	
}