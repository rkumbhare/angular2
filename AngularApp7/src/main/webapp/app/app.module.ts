import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }   from './app.component';
import {ProductListComponent} from './product-list.component';
import {ProductAddComponent} from './product-add.component';
import { ProductFilterPipe } from './product-filter.pipe';
import { ProductService } from './product.service';
import {StarRatingComponent} from './star-rating.component';
import {routing, appRouteProviders} from './app.routes';
import {ProductSearchComponent} from './product-search.component';

@NgModule({
    imports: [
    			BrowserModule, 
    			FormsModule, 
    			HttpModule, 
    			routing,
    		 ],
    declarations: [
    			AppComponent, 
    			ProductListComponent, 
    			ProductAddComponent,
    			StarRatingComponent,
    			ProductSearchComponent,
    			ProductFilterPipe
    		 ],
    providers: [
    			ProductService, 
    			appRouteProviders	
    		],
    bootstrap: [AppComponent]
})

export class AppModule { }


