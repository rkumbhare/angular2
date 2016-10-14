import { Component , Inject} from '@angular/core';


@Component({
    selector: 'dashboard',
    templateUrl: 'app/dashboard/view/dashboard.html'
})
export class DashboardComponent{
    private title : string = "Angular 2 Application - Dashboard";

    constructor(){
    }

}