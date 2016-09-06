import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }   from './app.component';
import {ProductListComponent} from './product-list.component';
import { ProductFilterPipe } from './product-filter.pipe';
import { ProductService } from './product.service';

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule],
    declarations: [AppComponent, ProductListComponent, ProductFilterPipe],
    providers: [ProductService],
    bootstrap: [AppComponent]
})

export class AppModule { }


