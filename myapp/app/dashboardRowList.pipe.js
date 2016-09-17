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
var core_1 = require('@angular/core');
var dashboardRow_1 = require('./dashboardRow');
var DashboardRowListPipe = (function () {
    function DashboardRowListPipe() {
    }
    DashboardRowListPipe.prototype.transform = function (productList, size) {
        var dashboardRowList = [];
        var dashboardRow = new dashboardRow_1.DashboardRow();
        var counter = 0;
        for (var _i = 0, productList_1 = productList; _i < productList_1.length; _i++) {
            var prod = productList_1[_i];
            dashboardRow.addProduct(prod);
            counter = counter + 1;
            if (counter == size) {
                dashboardRowList.push(dashboardRow);
                dashboardRow = new dashboardRow_1.DashboardRow();
                counter = 0;
            }
        }
        if (counter != 0) {
            dashboardRowList.push(dashboardRow);
        }
        return dashboardRowList;
    };
    DashboardRowListPipe = __decorate([
        core_1.Pipe({
            name: 'dashboardRowList'
        }), 
        __metadata('design:paramtypes', [])
    ], DashboardRowListPipe);
    return DashboardRowListPipe;
}());
exports.DashboardRowListPipe = DashboardRowListPipe;
//# sourceMappingURL=dashboardRowList.pipe.js.map