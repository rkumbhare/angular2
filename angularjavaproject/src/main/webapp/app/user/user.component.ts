import { Component , Inject} from '@angular/core';

import {UserService} from './user.service';

@Component({
    selector: 'user',
    templateUrl: 'app/user/view/user.html'
})
export class UserComponent{
    private title : string = "Angular 2 Application - User";
    private users: any[];

    constructor(@Inject(UserService) private userService: UserService){
        
    }

    ngOnInit(){
        this.userService.get().subscribe(
            users => {this.users = users},
            error => {console.error(error)},
            () => {console.log(this.users)}
        );
    }

}