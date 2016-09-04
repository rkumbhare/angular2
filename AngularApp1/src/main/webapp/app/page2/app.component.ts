import {Component} from 'angular2/core';
	
@Component({
	selector: 'myapp',
	template: '<h1>{{msg}}</h1>'
})

export class AppComponent{
	constructor(){
		this.msg = "Angular1 Application - Page2 component";
	}
}