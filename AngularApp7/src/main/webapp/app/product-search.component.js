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
var product_service_1 = require('./product.service');
var ProductSearchComponent = (function () {
    function ProductSearchComponent(productService) {
        this.productService = productService;
        this.title = "Search Product";
    }
    ProductSearchComponent.prototype.searchProduct = function () {
        var _this = this;
        if (this.query == undefined || this.query == '') {
            this.productList = undefined;
            return;
        }
        this.productService.search(this.query).subscribe(function (data) { _this.productList = data; }, function (error) { console.error(error); }, function () { });
    };
    ProductSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.getProducts().subscribe(function (data) { _this.productList = data; }, function (error) { console.error(error); }, function () { });
    };
    ProductSearchComponent.prototype.onSelect = function ($event) {
        this.selectedProduct = $event.item;
    };
    ProductSearchComponent.prototype.onSearch = function () {
        var _this = this;
        if (this.productName == undefined || this.productName == '') {
            this.productList = undefined;
            return;
        }
        this.productService.search(this.productName).subscribe(function (data) { _this.productList = data; }, function (error) { console.error(error); }, function () { });
    };
    ProductSearchComponent = __decorate([
        core_1.Component({
            selector: 'product-search',
            templateUrl: 'app/view/product-search.html',
            styleUrls: ['app/view/product-search.component.css']
        }),
        __param(0, core_1.Inject(product_service_1.ProductService)), 
        __metadata('design:paramtypes', [product_service_1.ProductService])
    ], ProductSearchComponent);
    return ProductSearchComponent;
}());
exports.ProductSearchComponent = ProductSearchComponent;
//# sourceMappingURL=product-search.component.js.map