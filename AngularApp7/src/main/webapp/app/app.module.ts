import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2BootstrapModule } from 'ng2-bootstrap';

import { AppComponent }   from './app.component';
import {ProductListComponent} from './product-list.component';
import {ProductAddComponent} from './product-add.component';
import { ProductFilterPipe } from './product-filter.pipe';
import { ProductService } from './product.service';
import {StarRatingComponent} from './star-rating.component';
import {routing, appRouteProviders} from './app.routes';
import {ProductSearchComponent} from './product-search.component';
import {ProductEditComponent} from './product-edit.component';
import {ControlMessagesComponent} from './control-messages.component';
import {ProductInfoComponent} from './product-info.component';
import {ProductInfoModelComponent} from './product-info-model.component';
import {ProductDashboardComponent} from './product-dashboard.component';
import {DashboardRowListPipe} from './dashboardRowList.pipe';

@NgModule({
    imports: [
    			BrowserModule, 
    			FormsModule, ReactiveFormsModule,
    			HttpModule, 
    			routing,
    			Ng2BootstrapModule,
    		 ],
    declarations: [
    			AppComponent, 
    			ProductListComponent, 
    			ProductInfoComponent, 
    			ProductAddComponent,
    			StarRatingComponent,
    			ProductSearchComponent,
    			ProductEditComponent,
    			ControlMessagesComponent,
    			ProductDashboardComponent,
    			ProductInfoModelComponent,
    			ProductFilterPipe,
    			DashboardRowListPipe
    		 ],
    providers: [
    			ProductService, 
    			appRouteProviders	
    		],
    bootstrap: [AppComponent]
})

export class AppModule { } 