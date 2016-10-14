import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http'; 
import {CalendarModule, InputTextModule} from 'primeng/primeng';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
import {AppComponent} from './app.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule, ReactiveFormsModule, 
        CalendarModule, InputTextModule,
    ],

    declarations: [
        AppComponent,
    ],

    providers: [

    ],
     
    bootstrap: [AppComponent]
})
export class AppModule{}