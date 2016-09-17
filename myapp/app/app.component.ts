/**
 * root component of the application
 */
import { Component, Inject } from '@angular/core';



@Component({
    selector: 'myapp',
    templateUrl: 'app/app.component.html'
})

export class AppComponent {

    title: string;
    subtitle: string;

    constructor() {
        this.title = "Angular2 Application Demo";
        this.subtitle = "Service & Dependency Injection, HTTP Service";
    }


}