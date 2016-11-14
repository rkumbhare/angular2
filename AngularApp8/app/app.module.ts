import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http'; 
import {CalendarModule, InputTextModule, DataTableModule, PaginatorModule} from 'primeng/primeng';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
import {AppComponent} from './app.component';
import {DatatableComponent} from './datatable/datatable.component';
import {UsersComponent} from './users.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule, ReactiveFormsModule, 
        CalendarModule, InputTextModule,
        DataTableModule, PaginatorModule,
        HttpModule, 
    ],

    declarations: [
        AppComponent,
        UsersComponent,
        DatatableComponent,
    ],

    providers: [

    ],
     
    bootstrap: [AppComponent]
})
export class AppModule{}