import { Component , Inject} from '@angular/core';
import { ViewChild, ElementRef, AfterViewInit} from '@angular/core';
//declare var $: JQueryStatic;

import {DatatableComponent} from './datatable/datatable.component';

@Component({
    selector: 'users',
    templateUrl: '/app/view/users.html'
})
export class UsersComponent{

    @ViewChild("userDatatable") datatableComponent: DatatableComponent;
    private searchCriteria: any = {gender:''};

    constructor(){
    }

    ngAfterViewInit() {
    }

    searchUser(): void{
        this.datatableComponent.search(this.searchCriteria);
    }

}