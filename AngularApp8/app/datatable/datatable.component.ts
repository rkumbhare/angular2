import { Component , Inject} from '@angular/core';
import { ViewChild, ElementRef, AfterViewInit} from '@angular/core';
import { Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';

import { User} from '../models/user';

@Component({
    selector: 'datatable',
    templateUrl: '/app/datatable/view/datatable.component.html',
    styleUrls: ['app/datatable/view/datatable.component.css']
})
export class DatatableComponent{

    private userList: User[] = [];
    private selectedUsers: User[] = [];

    private startIndex: number = 0;
    private pageSize: number = 5;
    private sortColumn: string ;
    private sortOrder: number;
    private totalRecords: number;
    private SearchCriteria: any;

    constructor(@Inject(Http) private http: Http){
    }

    ngOnInit(){
        this.fetch();
    }

    onPage($event){
        this.startIndex = $event.first;
        this.pageSize = $event.rows;
        console.log($event.first);
        console.log($event.rows);
        this.fetch();

    }

    onSort($event){
        this.sortColumn = $event.field;
        this.sortOrder = $event.order;
        console.log($event.field);
        console.log($event.order);
        this.fetch();
    }


    // onRowSelect($event){
    //     console.log($event);
    // }
    // onRowUnselect($event){
    //     console.log($event);
    // }
    // onHeaderCheckboxToggle($event){
    //     if($event.checked){
    //         for(let user of this.userList){
    //             if(this.selectedUsers.indexOf(user) == -1){
    //                 this.selectedUsers.push(user);
    //             }
    //         }
    //     }else{
    //        for(let user of this.userList){
    //             this.selectedUsers = this.selectedUsers.filter((selectedUsr: User) => selectedUsr != user);
    //         }
    //     }
    // }


    fetch(): void{
        let url: string = "http://localhost:8080/restapi/user?" +
                        "startIndex=" + this.startIndex + 
                        "&pageSize=" + this.pageSize;

        if(this.sortColumn && this.sortOrder){
            url = url + "&sortColumn=" + this.sortColumn + "&sortOrder=" + this.sortOrder;
        }

        if(this.SearchCriteria){
            if(this.SearchCriteria.id && this.SearchCriteria.id != ""){
                url = url + "&id=" + this.SearchCriteria.id;
            }
            if(this.SearchCriteria.fname && this.SearchCriteria.fname != ""){
                url = url + "&fname=" + this.SearchCriteria.fname;
            }
            if(this.SearchCriteria.gender && this.SearchCriteria.gender != ""){
                url = url + "&gender=" + this.SearchCriteria.gender;
            }
        }

        this.http.get(url)
        .map((res: Response) => res.json())
        .do(data => console.log(data))
        .subscribe(
            data => {
                this.userList=data.users;
                this.totalRecords=data.totalRecords;
            },
            error => console.error(error),
            () => {}
        );
    }

    search(searchCriteria): void{
        console.log(searchCriteria);
        this.SearchCriteria = searchCriteria;
        this.fetch();
    }

}