"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/Rx');
var DatatableComponent = (function () {
    function DatatableComponent(http) {
        this.http = http;
        this.userList = [];
        this.selectedUsers = [];
        this.startIndex = 0;
        this.pageSize = 5;
    }
    DatatableComponent.prototype.ngOnInit = function () {
        this.fetch();
    };
    DatatableComponent.prototype.onPage = function ($event) {
        this.startIndex = $event.first;
        this.pageSize = $event.rows;
        console.log($event.first);
        console.log($event.rows);
        this.fetch();
    };
    DatatableComponent.prototype.onSort = function ($event) {
        this.sortColumn = $event.field;
        this.sortOrder = $event.order;
        console.log($event.field);
        console.log($event.order);
        this.fetch();
    };
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
    DatatableComponent.prototype.fetch = function () {
        var _this = this;
        var url = "http://localhost:8080/restapi/user?" +
            "startIndex=" + this.startIndex +
            "&pageSize=" + this.pageSize;
        if (this.sortColumn && this.sortOrder) {
            url = url + "&sortColumn=" + this.sortColumn + "&sortOrder=" + this.sortOrder;
        }
        if (this.SearchCriteria) {
            if (this.SearchCriteria.id && this.SearchCriteria.id != "") {
                url = url + "&id=" + this.SearchCriteria.id;
            }
            if (this.SearchCriteria.fname && this.SearchCriteria.fname != "") {
                url = url + "&fname=" + this.SearchCriteria.fname;
            }
            if (this.SearchCriteria.gender && this.SearchCriteria.gender != "") {
                url = url + "&gender=" + this.SearchCriteria.gender;
            }
        }
        this.http.get(url)
            .map(function (res) { return res.json(); })
            .do(function (data) { return console.log(data); })
            .subscribe(function (data) {
            _this.userList = data.users;
            _this.totalRecords = data.totalRecords;
        }, function (error) { return console.error(error); }, function () { });
    };
    DatatableComponent.prototype.search = function (searchCriteria) {
        console.log(searchCriteria);
        this.SearchCriteria = searchCriteria;
        this.fetch();
    };
    DatatableComponent = __decorate([
        core_1.Component({
            selector: 'datatable',
            templateUrl: '/app/datatable/view/datatable.component.html',
            styleUrls: ['app/datatable/view/datatable.component.css']
        }),
        __param(0, core_1.Inject(http_1.Http)), 
        __metadata('design:paramtypes', [http_1.Http])
    ], DatatableComponent);
    return DatatableComponent;
}());
exports.DatatableComponent = DatatableComponent;
//# sourceMappingURL=datatable.component.js.map