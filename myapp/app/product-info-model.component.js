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
var Product_1 = require('./Product');
var ProductInfoModelComponent = (function () {
    function ProductInfoModelComponent(ele) {
        this.ele = ele;
        this.closeModel = new core_1.EventEmitter();
    }
    ProductInfoModelComponent.prototype.openModel = function () {
        console.log("opening product-info-model");
    };
    ProductInfoModelComponent.prototype.onCloseModel = function () {
        this.closeModel.emit("closing product-info-model");
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Product_1.Product)
    ], ProductInfoModelComponent.prototype, "product", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ProductInfoModelComponent.prototype, "closeModel", void 0);
    ProductInfoModelComponent = __decorate([
        core_1.Component({
            selector: 'product-info-model',
            templateUrl: 'app/product-info-model.html',
            styleUrls: ['app/model-dialog.css']
        }),
        __param(0, core_1.Inject(core_1.ElementRef)), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], ProductInfoModelComponent);
    return ProductInfoModelComponent;
}());
exports.ProductInfoModelComponent = ProductInfoModelComponent;
//# sourceMappingURL=product-info-model.component.js.map