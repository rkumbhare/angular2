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
var Observable_1 = require('rxjs/Observable');
var AppComponent = (function () {
    function AppComponent(http) {
        var _this = this;
        this.http = http;
        this.title = "Angular 2 Application";
        this.productList = [];
        var res = this.http.get("localhost:8080/AngularApp/product")
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log(data); })
            .catch(this.errorHandler);
        res.subscribe(function (data) { return _this.productList = data; }, function (error) { return console.error(error); }, function () { });
    }
    AppComponent.prototype.errorHandler = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'myapp',
            templateUrl: '/app/view/app.component.html'
        }),
        __param(0, core_1.Inject(http_1.Http)), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map