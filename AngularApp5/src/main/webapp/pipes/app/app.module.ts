import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ExponentialStrengthPipe } from './exponential-strength.pipe';
import { MultiplyPipe } from './multiply.pipe';
import { MultiplyPipe } from './multiply.pipe';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    declarations: [
        AppComponent,
        ExponentialStrengthPipe,
        MultiplyPipe,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/