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
var product_info_model_component_1 = require('./product-info-model.component');
var product_service_1 = require('./product.service');
var ProductDashboardComponent = (function () {
    function ProductDashboardComponent(productService) {
        var _this = this;
        this.productService = productService;
        console.log("Init - product-dashboard.component");
        this.productService.getProducts()
            .subscribe(function (products) { _this.productList = products; }, function (error) { console.error(error); }, function () { });
    }
    ProductDashboardComponent.prototype.openProductInfoModel = function (product) {
        console.log("view product info : " + product);
        this.selectedProduct = product;
        this.productInfoModel.openModel();
        return false;
    };
    ProductDashboardComponent.prototype.closeProductInfoModel = function ($event) {
        console.log($event);
        this.selectedProduct = undefined;
    };
    __decorate([
        core_1.ViewChild(product_info_model_component_1.ProductInfoModelComponent), 
        __metadata('design:type', product_info_model_component_1.ProductInfoModelComponent)
    ], ProductDashboardComponent.prototype, "productInfoModel", void 0);
    ProductDashboardComponent = __decorate([
        core_1.Component({
            selector: 'product-dashboard',
            templateUrl: 'app/view/product-dashboard.html',
            styleUrls: ['app/view/product-dashboard.component.css']
        }),
        __param(0, core_1.Inject(product_service_1.ProductService)), 
        __metadata('design:paramtypes', [product_service_1.ProductService])
    ], ProductDashboardComponent);
    return ProductDashboardComponent;
}());
exports.ProductDashboardComponent = ProductDashboardComponent;
//# sourceMappingURL=product-dashboard.component.js.map