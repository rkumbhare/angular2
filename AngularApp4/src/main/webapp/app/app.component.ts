/*
*	Container Component
*/

import { Component } from 'angular2/core';


@Component({
	selector: 'myapp',
	template: '<h1>{{msg}}</h1>'
})
export class AppComponent{
	msg: string;
	
	constructor(){
		this.msg = "Welcome to Angular2 Application Demo - Basic Component, Custom Pipes, Nested Component & Input/Output";
	}	
}