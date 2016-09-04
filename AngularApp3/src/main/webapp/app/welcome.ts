import { Component, Input, Output, EventEmitter } from 'angular2/core';


@Component({
	selector: 'welcome',
	template: '<h1>{{msg}}</h1><button (click)="handleEvent()">click</button>'
})

export class Welcome{
	
	@Input()
	msg : String;
	
	@Output()
	onClick: EventEmitter = new EventEmitter();
	
	constructor(){
		this.msg = null;
	}
	
	handleEvent(){
		this.onClick.emit({msg:"Click Event occured!"});
	}
}