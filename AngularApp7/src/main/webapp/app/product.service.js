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
/**
 * Product Service with product data and logic
 */
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
var ProductService = (function () {
    function ProductService(http) {
        this.http = http;
        this._ratings = [1, 2, 3, 4, 5];
        this.url = "/AngularApp/product";
        this.searchUrl = "/AngularApp/product/search";
    }
    ProductService.prototype.addProduct = function (product) {
        var headers = new http_1.Headers('content-type', 'application/json');
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.put(this.url, product, options)
            .map(function (response) { return response = response.json(); })
            .do(function (data) { return console.log(data); })
            .catch(this.errorHandler);
    };
    ProductService.prototype.update = function (product) {
        var headers = new http_1.Headers({ 'content-type': 'application/json' });
        var reqOptions = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.url, product, reqOptions)
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log(data); })
            .catch(this.errorHandler);
    };
    ProductService.prototype.getProducts = function () {
        console.log("Fetching All the products");
        return this.http.get(this.url)
            .map(function (response) { return response = response.json(); })
            .do(function (data) { return console.log(data); })
            .catch(this.errorHandler);
    };
    ProductService.prototype.getProduct = function (productId) {
        console.log("Fetching product by Id : " + productId);
        return this.http.get(this.url + "/" + productId)
            .map(function (response) { return response = response.json(); })
            .do(function (data) { return console.log(data); })
            .catch(this.errorHandler);
    };
    ProductService.prototype.search = function (query) {
        console.log("Search Product by : " + query);
        var params = new http_1.URLSearchParams();
        params.set('query', query);
        return this.http.get(this.searchUrl, { search: params })
            .map(function (response) { return response = response.json(); })
            .do(function (data) { return console.log(data); })
            .catch(this.errorHandler);
    };
    Object.defineProperty(ProductService.prototype, "ratings", {
        get: function () {
            return this._ratings;
        },
        enumerable: true,
        configurable: true
    });
    ProductService.prototype.errorHandler = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error);
    };
    ProductService = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Inject(http_1.Http)), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ProductService);
    return ProductService;
}());
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map