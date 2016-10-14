"use strict";
var router_1 = require('@angular/router');
var dashboard_component_1 = require('./dashboard/dashboard.component');
var product_component_1 = require('./product/product.component');
var user_component_1 = require('./user/user.component');
var appRoutes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent },
    { path: 'product', component: product_component_1.ProductComponent },
    { path: 'user', component: user_component_1.UserComponent },
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routes.js.map