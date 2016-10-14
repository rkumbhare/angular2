import { Component , Inject} from '@angular/core';


@Component({
    selector: 'user',
    templateUrl: 'app/user/view/user.html'
})
export class UserComponent{
    private title : string = "Angular 2 Application - User";

    constructor(){
    }

}