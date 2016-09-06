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
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var translate_pipe_1 = require("./src/translate.pipe");
var translate_service_1 = require("./src/translate.service");
__export(require("./src/translate.pipe"));
__export(require("./src/translate.service"));
__export(require("./src/translate.parser"));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    pipes: [translate_pipe_1.TranslatePipe],
    providers: [translate_service_1.TranslateService]
};
var TranslateModule = (function () {
    function TranslateModule() {
    }
    TranslateModule.forRoot = function (providedLoader) {
        if (providedLoader === void 0) { providedLoader = {
            provide: translate_service_1.TranslateLoader,
            useFactory: function (http) { return new translate_service_1.TranslateStaticLoader(http); },
            deps: [http_1.Http]
        }; }
        return {
            ngModule: TranslateModule,
            providers: [providedLoader, translate_service_1.TranslateService]
        };
    };
    TranslateModule = __decorate([
        core_1.NgModule({
            imports: [http_1.HttpModule],
            declarations: [
                translate_pipe_1.TranslatePipe
            ],
            exports: [
                http_1.HttpModule,
                translate_pipe_1.TranslatePipe
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], TranslateModule);
    return TranslateModule;
}());
exports.TranslateModule = TranslateModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcyLXRyYW5zbGF0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nMi10cmFuc2xhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLHFCQUE0QyxlQUFlLENBQUMsQ0FBQTtBQUM1RCxxQkFBK0IsZUFBZSxDQUFDLENBQUE7QUFDL0MsK0JBQTRCLHNCQUFzQixDQUFDLENBQUE7QUFDbkQsa0NBQXVFLHlCQUF5QixDQUFDLENBQUE7QUFFakcsaUJBQWMsc0JBQXNCLENBQUMsRUFBQTtBQUNyQyxpQkFBYyx5QkFBeUIsQ0FBQyxFQUFBO0FBQ3hDLGlCQUFjLHdCQUF3QixDQUFDLEVBQUE7QUFHdkM7a0JBQWU7SUFDWCxLQUFLLEVBQUUsQ0FBQyw4QkFBYSxDQUFDO0lBQ3RCLFNBQVMsRUFBRSxDQUFDLG9DQUFnQixDQUFDO0NBQ2hDLENBQUM7QUFZRjtJQUFBO0lBV0EsQ0FBQztJQVZVLHVCQUFPLEdBQWQsVUFBZSxjQUlkO1FBSmMsOEJBSWQsR0FKYztZQUNYLE9BQU8sRUFBRSxtQ0FBZTtZQUN4QixVQUFVLEVBQUUsVUFBQyxJQUFVLElBQUssT0FBQSxJQUFJLHlDQUFxQixDQUFDLElBQUksQ0FBQyxFQUEvQixDQUErQjtZQUMzRCxJQUFJLEVBQUUsQ0FBQyxXQUFJLENBQUM7U0FDZjtRQUNHLE1BQU0sQ0FBQztZQUNILFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFNBQVMsRUFBRSxDQUFDLGNBQWMsRUFBRSxvQ0FBZ0IsQ0FBQztTQUNoRCxDQUFDO0lBQ04sQ0FBQztJQXBCTDtRQUFDLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLGlCQUFVLENBQUM7WUFDckIsWUFBWSxFQUFFO2dCQUNWLDhCQUFhO2FBQ2hCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLGlCQUFVO2dCQUNWLDhCQUFhO2FBQ2hCO1NBQ0osQ0FBQzs7dUJBQUE7SUFZRixzQkFBQztBQUFELENBQUMsQUFYRCxJQVdDO0FBWFksdUJBQWUsa0JBVzNCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtIdHRwLCBIdHRwTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IHtUcmFuc2xhdGVQaXBlfSBmcm9tIFwiLi9zcmMvdHJhbnNsYXRlLnBpcGVcIjtcbmltcG9ydCB7VHJhbnNsYXRlU2VydmljZSwgVHJhbnNsYXRlTG9hZGVyLCBUcmFuc2xhdGVTdGF0aWNMb2FkZXJ9IGZyb20gXCIuL3NyYy90cmFuc2xhdGUuc2VydmljZVwiO1xuXG5leHBvcnQgKiBmcm9tIFwiLi9zcmMvdHJhbnNsYXRlLnBpcGVcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3NyYy90cmFuc2xhdGUuc2VydmljZVwiO1xuZXhwb3J0ICogZnJvbSBcIi4vc3JjL3RyYW5zbGF0ZS5wYXJzZXJcIjtcblxuLy8gZm9yIGFuZ3VsYXItY2xpXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgcGlwZXM6IFtUcmFuc2xhdGVQaXBlXSxcbiAgICBwcm92aWRlcnM6IFtUcmFuc2xhdGVTZXJ2aWNlXVxufTtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbSHR0cE1vZHVsZV0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIFRyYW5zbGF0ZVBpcGVcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgSHR0cE1vZHVsZSwgLy8gdG9kbyByZW1vdmUgdGhpcyB3aGVuIHJlbW92aW5nIHRoZSBsb2FkZXIgZnJvbSBjb3JlXG4gICAgICAgIFRyYW5zbGF0ZVBpcGVcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIFRyYW5zbGF0ZU1vZHVsZSB7XG4gICAgc3RhdGljIGZvclJvb3QocHJvdmlkZWRMb2FkZXI6IGFueSA9IHtcbiAgICAgICAgcHJvdmlkZTogVHJhbnNsYXRlTG9hZGVyLFxuICAgICAgICB1c2VGYWN0b3J5OiAoaHR0cDogSHR0cCkgPT4gbmV3IFRyYW5zbGF0ZVN0YXRpY0xvYWRlcihodHRwKSxcbiAgICAgICAgZGVwczogW0h0dHBdXG4gICAgfSk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmdNb2R1bGU6IFRyYW5zbGF0ZU1vZHVsZSxcbiAgICAgICAgICAgIHByb3ZpZGVyczogW3Byb3ZpZGVkTG9hZGVyLCBUcmFuc2xhdGVTZXJ2aWNlXVxuICAgICAgICB9O1xuICAgIH1cbn1cbiJdfQ==