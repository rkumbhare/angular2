//our root app component
import {Component} from 'angular2/core';
import {Hello} from './hello';

@Component({
  selector: 'my-app',
  directives: [Hello],
  template: `
  <hello-world [message]="myMessage" (onClick)="myCallback($event)">
  </hello-world>
  `
})
export class App {
  constructor() {
    this.myMessage = 'Angular2';
  }
  
  myCallback(event){
    this.myMessage = event;
  }
}