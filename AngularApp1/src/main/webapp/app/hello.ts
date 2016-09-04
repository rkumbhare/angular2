//our root app component
import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
  selector: 'hello-world',
  template: `
    <div (click)="handleClick()">
      <h2>Hello {{message}}</h2>
    </div>
  `
})
export class Hello {
  
  @Input()
  message : String;
  
  @Output()
  onClick : EventEmitter = new EventEmitter();
  
  handleClick(){
    this.onClick.emit("I got clicked pretty bad");
  }
}