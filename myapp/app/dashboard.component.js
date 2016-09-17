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
var product_info_model_component_1 = require('./product-info-model.component');
var DashboardComponent = (function () {
    function DashboardComponent() {
        this.DEFAULT_ROW_SIZE = 3;
        this.dashboardRows = [];
        this.productList = [
            { productName: 'Dettol Soap', productCode: 'Prod1001', description: 'Dettol Soap', price: 50.50, available: 50, rating: 5 },
            { productName: 'Lifeboy Soap', productCode: 'Prod1002', description: 'Lifeboy Soap', price: 30.50, available: 30, rating: 3 },
            { productName: 'Lux Soap', productCode: 'Prod1003', description: 'Lux Soap', price: 40.50, available: 20, rating: 2 },
            { productName: 'Santoor Soap', productCode: 'Prod1004', description: 'Santoor Soap', price: 40.50, available: 40, rating: 4 },
            { productName: 'Dove Soap', productCode: 'Prod1005', description: 'Dove Soap', price: 60.50, available: 25, rating: 4 },
            { productName: 'Fair & Lovely cream', productCode: 'Prod1006', description: 'Fair & Lovely cream', price: 70.00, available: 10, rating: 2 },
            { productName: 'Dabur Hair Oil', productCode: 'Prod1007', description: 'Dabur Hair Oil', price: 30.50, available: 20, rating: 3 },
            { productName: 'Colgate ToothPaste', productCode: 'Prod1008', description: 'Colgate ToothPaste', price: 40.50, available: 20, rating: 2 }
        ];
    }
    DashboardComponent.prototype.openProductInfoModel = function (product) {
        console.log("view product info : " + product);
        this.selectedProduct = product;
        this.productInfoModel.openModel();
        return false;
    };
    DashboardComponent.prototype.closeProductInfoModel = function ($event) {
        console.log($event);
        this.selectedProduct = undefined;
    };
    __decorate([
        core_1.ViewChild(product_info_model_component_1.ProductInfoModelComponent), 
        __metadata('design:type', product_info_model_component_1.ProductInfoModelComponent)
    ], DashboardComponent.prototype, "productInfoModel", void 0);
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'dashboard',
            templateUrl: 'app/dashboard.html',
            styleUrls: ['app/dashboard.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map