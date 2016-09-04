//our root app component
import {Component} from 'angular2/core';
import {Hello} from './hello';
import {bootstrap} from 'angular2/platform/browser';

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

//main entry point
bootstrap(App, [])
  .catch(err => console.error(err));