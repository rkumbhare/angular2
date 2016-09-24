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
/**
 * to display start-rating of the product
 */
var core_1 = require('@angular/core');
var StarRatingComponent = (function () {
    function StarRatingComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], StarRatingComponent.prototype, "rating", void 0);
    StarRatingComponent = __decorate([
        core_1.Component({
            selector: 'star-rating',
            templateUrl: 'app/view/star-rating.html'
        }), 
        __metadata('design:paramtypes', [])
    ], StarRatingComponent);
    return StarRatingComponent;
}());
exports.StarRatingComponent = StarRatingComponent;
//# sourceMappingURL=star-rating.component.js.map