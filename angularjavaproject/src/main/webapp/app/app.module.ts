import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http'; 
import {CalendarModule, InputTextModule} from 'primeng/primeng';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';

import {AppComponent} from './app.component';
import {routing} from './app.routes';
import {DashboardComponent} from './dashboard/dashboard.component'; 
import {ProductComponent} from './product/product.component';
import {UserComponent} from './user/user.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule, ReactiveFormsModule, 
        CalendarModule, InputTextModule,
        routing,
    ],

    declarations: [
        AppComponent,
        DashboardComponent,
        ProductComponent,
        UserComponent,
    ],

    providers: [

    ],
     
    bootstrap: [AppComponent]
})
export class AppModule{}