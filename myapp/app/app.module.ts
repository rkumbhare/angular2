import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
//import { HttpModule } from '@angular/http';

import { AppComponent }   from './app.component';
// import {ProductListComponent} from './product-list.component';
// import { ProductFilterPipe } from './product-filter.pipe';
// import { ProductService } from './product.service';
// import {routing, appRouteProviders} from './app.routes';
 import {StarRatingComponent} from './star-rating.component';
import {DirectiveDemoComponent} from './directive.demo.component';
import {InfoDirective} from './info.directive';
import {ErrorDirective} from './error.directive';
import {IfDirective} from './if.directive';
import {DashboardComponent} from './dashboard.component';
import {DashboardRowListPipe} from './dashboardRowList.pipe';
import {ProductInfoModelComponent} from './product-info-model.component';

@NgModule({
    imports: [
    			BrowserModule, 
    			FormsModule, 
    			//HttpModule
    		 ],
    declarations: [
    			AppComponent, 
    			//ProductListComponent, 
    			StarRatingComponent,
    			//ProductFilterPipe,
				DirectiveDemoComponent,
				InfoDirective,
				ErrorDirective,
				IfDirective,
				DashboardComponent,
				ProductInfoModelComponent,
				DashboardRowListPipe,
    		 ],
    providers: [
    			//ProductService
				],
    bootstrap: [AppComponent]
})

export class AppModule { }


