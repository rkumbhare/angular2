import { Component , Inject} from '@angular/core';
import { ViewChild, ElementRef, AfterViewInit} from '@angular/core';
//declare var $: JQueryStatic;

@Component({
    selector: 'myapp',
    templateUrl: '/app/view/app.component.html'
})
export class AppComponent{
    private title : string = "Angular 2 Application";
}