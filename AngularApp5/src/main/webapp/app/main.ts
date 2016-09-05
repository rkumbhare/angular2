/**
 * bootstraping the AppComponent (root component)
 */
import { bootstrap } from 'angular2/platform/browser';
import { AppComponent } from './app.component';
import { ProductService } from './product.service';
 
bootstrap(AppComponent, []).catch(err => console.error(err));