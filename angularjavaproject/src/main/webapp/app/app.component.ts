import { Component , Inject} from '@angular/core';


@Component({
    selector: 'myapp',
    templateUrl: 'app/view/app.component.html'
})
export class AppComponent{
    private title : string = "Angular 2 Application";
    private date: string;

    constructor(){
    }

}