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
var TypeHDirective = (function () {
    function TypeHDirective(ele, renderer) {
        this.ele = ele;
        this.renderer = renderer;
    }
    TypeHDirective.prototype.ngAfterViewInit = function () {
        var typehEle = this.ele.nativeElement;
        console.log(this.ele.nativeElement);
    };
    TypeHDirective.prototype.ngAfterContentInit = function () {
        console.log(this.ele.nativeElement);
    };
    TypeHDirective = __decorate([
        core_1.Directive({
            selector: '[typeh]'
        }),
        __param(0, core_1.Inject(core_1.ElementRef)),
        __param(1, core_1.Inject(core_1.Renderer)), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
    ], TypeHDirective);
    return TypeHDirective;
}());
exports.TypeHDirective = TypeHDirective;
//# sourceMappingURL=typeh.directive.js.map