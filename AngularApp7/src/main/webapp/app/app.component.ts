/**
 * root component of the application
 */
import { Component, Inject } from '@angular/core';



@Component({
    selector: 'myapp',
    template: '<h2>{{title}}</h2>' +
				'<h4>{{subtitle}}</h4>' +
				'<nav>' + 	
					 '<a routerLink="/product/list">Product List</a>' +
					 '<a routerLink="/product/new">New Product</a>' +
				'</nav>' +
				'<div class="clear"></div>' +
				'<router-outlet></router-outlet>'
					
					
})

export class AppComponent {

    title: string;
    subtitle: string;

    constructor() {
        this.title = "Welcome to Angular2 Application Demo";
        this.subtitle = "Service & Dependency Injection, HTTP Service";
    }


}