import {Component} from 'angular2/core';

@Component({
	selector: 'myapp',
	template: '<h1>{{msg}}</h1>'
})

export class AppComponent{
	constructor(){
		this.msg = "Angular2 Application demo - Page1 Component";
	}
}