import { Component } from 'angular2/core';
import { ProductListComponent } from './product-list.component'

@Component({
	selector: 'myapp',
	template: '<h1>{{msg}}</h1><product-list></product-list>',
	directives: [ProductListComponent]
})

export class AppComponent{
	constructor(){
		this.msg = "Welcome to AngularJS App";
	}
}