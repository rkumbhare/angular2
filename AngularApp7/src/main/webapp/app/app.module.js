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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var ng2_bootstrap_1 = require('ng2-bootstrap');
var app_component_1 = require('./app.component');
var product_list_component_1 = require('./product-list.component');
var product_add_component_1 = require('./product-add.component');
var product_filter_pipe_1 = require('./product-filter.pipe');
var product_service_1 = require('./product.service');
var star_rating_component_1 = require('./star-rating.component');
var app_routes_1 = require('./app.routes');
var product_search_component_1 = require('./product-search.component');
var product_edit_component_1 = require('./product-edit.component');
var control_messages_component_1 = require('./control-messages.component');
var product_info_component_1 = require('./product-info.component');
var product_info_model_component_1 = require('./product-info-model.component');
var product_dashboard_component_1 = require('./product-dashboard.component');
var dashboardRowList_pipe_1 = require('./dashboardRowList.pipe');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule, forms_1.ReactiveFormsModule,
                http_1.HttpModule,
                app_routes_1.routing,
                ng2_bootstrap_1.Ng2BootstrapModule,
            ],
            declarations: [
                app_component_1.AppComponent,
                product_list_component_1.ProductListComponent,
                product_info_component_1.ProductInfoComponent,
                product_add_component_1.ProductAddComponent,
                star_rating_component_1.StarRatingComponent,
                product_search_component_1.ProductSearchComponent,
                product_edit_component_1.ProductEditComponent,
                control_messages_component_1.ControlMessagesComponent,
                product_dashboard_component_1.ProductDashboardComponent,
                product_info_model_component_1.ProductInfoModelComponent,
                product_filter_pipe_1.ProductFilterPipe,
                dashboardRowList_pipe_1.DashboardRowListPipe,
            ],
            providers: [
                product_service_1.ProductService,
                app_routes_1.appRouteProviders,
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map