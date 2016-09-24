"use strict";
var router_1 = require('@angular/router');
var product_list_component_1 = require('./product-list.component');
var product_add_component_1 = require('./product-add.component');
var product_search_component_1 = require('./product-search.component');
var product_edit_component_1 = require('./product-edit.component');
var product_dashboard_component_1 = require('./product-dashboard.component');
var appRoutes = [
    { path: '', component: product_dashboard_component_1.ProductDashboardComponent },
    { path: 'dashboard', component: product_dashboard_component_1.ProductDashboardComponent },
    { path: 'product', component: product_list_component_1.ProductListComponent },
    { path: 'product/new', component: product_add_component_1.ProductAddComponent },
    { path: 'product/search', component: product_search_component_1.ProductSearchComponent },
    { path: 'product/edit/:productId', component: product_edit_component_1.ProductEditComponent }];
;
exports.appRouteProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routes.js.map