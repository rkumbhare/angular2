import {Component} from '@angular/core';

@Component({
    selector: 'directive-demo',
    templateUrl: 'app/directive-demo.html'
})
export class DirectiveDemoComponent{
    
    private infoMsg: string = "Angular 2 Info Directive";
    private errorMsg: string = "Angular 2 Error Directive";

    constructor(){
        

    }

}