import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

import {ProductListComponent} from './product-list.component';
import {ProductAddComponent} from './product-add.component';
import {ProductSearchComponent} from './product-search.component';
import {ProductEditComponent} from './product-edit.component';
import {ProductDashboardComponent} from './product-dashboard.component';

const appRoutes: Routes = [
    { path: '', component: ProductDashboardComponent },
    { path: 'dashboard', component: ProductDashboardComponent },
    { path: 'product', component: ProductListComponent },
    { path: 'product/new', component: ProductAddComponent },
    { path: 'product/search', component: ProductSearchComponent },
    { path: 'product/edit/:productId', component: ProductEditComponent]},
];

//export const appRouteProviders: any[] = [
//];

//export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);