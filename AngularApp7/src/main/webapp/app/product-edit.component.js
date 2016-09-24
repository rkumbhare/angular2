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
var Product_1 = require('./Product');
var product_service_1 = require('./product.service');
var ProductEditComponent = (function () {
    function ProductEditComponent(route, router, productService, formBuilder) {
        this.route = route;
        this.router = router;
        this.productService = productService;
        this.formBuilder = formBuilder;
    }
    ProductEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.product = new Product_1.Product();
        this.ratings = this.productService.ratings;
        this.route.params.forEach(function (params) {
            _this.product.productId = params['productId'];
            _this.productService.getProduct(_this.product.productId).subscribe(function (data) { return _this.product = data; }, function (error) { return console.error(error); }, function () {
                _this.title = "Update Product : " + _this.product.productName;
            });
        });
        this.productEditForm = this.formBuilder.group({
            'productName': ['', [forms_1.Validators.required]],
            'description': ['', [forms_1.Validators.required]],
            'price': ['', [forms_1.Validators.required]],
            'available': ['', [forms_1.Validators.required]],
            'rating': ['', [forms_1.Validators.required]],
        });
    };
    ProductEditComponent.prototype.updateProduct = function () {
        var _this = this;
        this.productService.update(this.product).subscribe(function (data) { return console.log(data); }, function (error) { return console.error(error); }, function () {
            _this.router.navigate(['/product']);
        });
    };
    ProductEditComponent = __decorate([
        core_1.Component({
            selector: 'product-edit',
            templateUrl: 'app/view/product-edit.html'
        }),
        __param(0, core_1.Inject(router_1.ActivatedRoute)),
        __param(1, core_1.Inject(router_1.Router)),
        __param(2, core_1.Inject(product_service_1.ProductService)),
        __param(3, core_1.Inject(forms_1.FormBuilder)), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, product_service_1.ProductService, forms_1.FormBuilder])
    ], ProductEditComponent);
    return ProductEditComponent;
}());
exports.ProductEditComponent = ProductEditComponent;
//# sourceMappingURL=product-edit.component.js.map