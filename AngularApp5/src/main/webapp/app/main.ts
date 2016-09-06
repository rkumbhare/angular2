/**
 * bootstraping the AppComponent (root component)
 */
import { bootstrap } from 'angular2/platform/browser';
import {HTTP_RPOVIDERS, Http, RequestOptions, XHRBackend} from 'angular2/http';
import 'rxjs/Rx';
import { AppComponent } from './app.component';
import { ProductService } from './product.service';


bootstrap(AppComponent, [HTTP_RPOVIDERS])
    .catch(err => console.error(err));