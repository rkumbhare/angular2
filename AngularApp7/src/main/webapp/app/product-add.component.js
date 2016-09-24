/**
 * New Product create
 */
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
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var product_service_1 = require('./product.service');
var Product_1 = require('./Product');
var validation_service_1 = require('./validation.service');
var ProductAddComponent = (function () {
    function ProductAddComponent(productService, formBuilder, router) {
        this.productService = productService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.title = "New Product";
    }
    ProductAddComponent.prototype.ngOnInit = function () {
        this.product = new Product_1.Product();
        this.ratings = this.productService.ratings;
        this.productAddForm = this.formBuilder.group({
            'productName': ['', [forms_1.Validators.required, forms_1.Validators.minLength(4), forms_1.Validators.maxLength(20)]],
            'description': ['', [forms_1.Validators.required, forms_1.Validators.minLength(4), forms_1.Validators.maxLength(20)]],
            'price': ['', [forms_1.Validators.required, validation_service_1.ValidationService.numberValidator]],
            'available': ['', [forms_1.Validators.required, validation_service_1.ValidationService.numberValidator]],
            'rating': ['', [forms_1.Validators.required, validation_service_1.ValidationService.numberValidator]]
        });
    };
    ProductAddComponent.prototype.addProduct = function () {
        var _this = this;
        console.log(JSON.stringify(this.product));
        this.productService.addProduct(this.product).subscribe(function (product) { return console.log(product); }, function (error) { return console.error(error); }, function () {
            _this.product = new Product_1.Product();
            _this.productAddForm.reset();
            _this.router.navigate(['/product']);
        });
    };
    ProductAddComponent = __decorate([
        core_1.Component({
            selector: 'product-add',
            templateUrl: 'app/view/product-add.html'
        }),
        __param(0, core_1.Inject(product_service_1.ProductService)),
        __param(1, core_1.Inject(forms_1.FormBuilder)),
        __param(2, core_1.Inject(router_1.Router)), 
        __metadata('design:paramtypes', [product_service_1.ProductService, forms_1.FormBuilder, router_1.Router])
    ], ProductAddComponent);
    return ProductAddComponent;
}());
exports.ProductAddComponent = ProductAddComponent;
//# sourceMappingURL=product-add.component.js.map