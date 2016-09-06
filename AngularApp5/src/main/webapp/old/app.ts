//Using Angular version 2.0.0-alpha.37

import {bootstrap, Component, NgFor, View} from 'angular2/angular2';
import {HTTP_PROVIDERS, Http} from 'angular2/http';

@Component({
  selector : 'child-cmp',
  template : ''
})
class ChildApp {
  constructor(http: Http) {
     http.get('people.json').subscribe(res => {
      console.log('People from child', res.json());
    });
  }
}

@Component({
  selector: 'app',
  providers: [HTTP_PROVIDERS]
})
@View({
  template: `
    <div>
      <h1>People</h1>
      <ul>
        <li *ng-for="#person of people">
          {{person.name}}
        </li>
      </ul>
    </div>
    <child-cmp></child-cmp>
  `,
  directives: [NgFor, ChildApp]
})
export class App {
  people: Object[];
  constructor(http:Http) {
    http.get('people.json').subscribe(res => {
      this.people = res.json();
    });
  }
  active:boolean = false;
  toggleActiveState() {
    this.active = !this.active;
  }
}

bootstrap(App)
  .catch(err => console.error(err));
  