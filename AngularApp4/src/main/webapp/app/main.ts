/**
 * loading the root component (AppComponent) (bootstraping)
 */

import { bootstrap } from 'angular2/platform/browser';
import { AppComponent } from './app.component';
 
 bootstrap(AppComponent, []).catch(err => console.error(err));