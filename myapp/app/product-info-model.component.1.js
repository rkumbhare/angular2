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
var ProductInfoModelComponent = (function () {
    function ProductInfoModelComponent() {
        this.showModel = false;
        this.closeModel = new core_1.EventEmitter();
    }
    ProductInfoModelComponent.prototype.openModel = function (product) {
        this.product = product;
    };
    ProductInfoModelComponent.prototype.onCloseModel = function () {
        this.product = undefined;
        this.closeModel.emit("closing product-info-model");
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ProductInfoModelComponent.prototype, "closeModel", void 0);
    ProductInfoModelComponent = __decorate([
        core_1.Component({
            selector: 'product-info-model',
            templateUrl: 'app/product-info-model.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ProductInfoModelComponent);
    return ProductInfoModelComponent;
}());
exports.ProductInfoModelComponent = ProductInfoModelComponent;
//# sourceMappingURL=product-info-model.component.1.js.map