import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

import {ProductListComponent} from './product-list.component';
import {ProductAddComponent} from './product-add.component';
import {ProductSearchComponent} from './product-search.component';
	
const appRoutes: Routes = [
	{path: '', component: ProductListComponent},
	{path: 'product', component: ProductListComponent},
	{path: 'product/new', component: ProductAddComponent},
	{path: 'product/search', component: ProductSearchComponent}
];

export const appRouteProviders: any[] = [
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);