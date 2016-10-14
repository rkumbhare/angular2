/**
 * defines App routes
 */
 import { ModuleWithProviders } from '@angular/core';
 import { RouterModule, Routes } from '@angular/router';
 	

import {DashboardComponent} from './dashboard/dashboard.component'; 
import {ProductComponent} from './product/product.component';
import {UserComponent} from './user/user.component';
 
 
 const appRoutes: Routes = [
    {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
 	{path: 'dashboard', component: DashboardComponent},
    {path: 'product', component: ProductComponent},
    {path: 'user', component: UserComponent},
 ];
 

 export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);