/**
 * defines App routes
 */
 import { ModuleWithProviders } from '@angular/core';
 import { RouterModule, Routes } from '@angular/router';
 	
 import {ProductListComponent} from './product-list.component';
 import {ProductAddComponent} from './product-add.component';
 
 
 const appRoutes: Routes = [
 	{path: '', component: ProductListComponent},
 	{path: 'product', component: ProductListComponent},
 	{path: 'product/new', component: ProductAddComponent}	
 ];
 
 export const appRouteProviders: any[] = [
 
 ];

 export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);