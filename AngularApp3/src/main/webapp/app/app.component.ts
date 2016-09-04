import { Component } from 'angular2/core';
import { Welcome } from './welcome'

@Component({
	selector: 'myapp',
	directives: [Welcome],
	template: '<welcome [msg]="msg" (onClick)="onclick($event)"></welcome>'
})

export class AppComponent{
	constructor(){
		this.msg = "Welcome to AngularJS - basic Component";
	}
	
	onclick(event){
		alert(event.msg);
	}
}