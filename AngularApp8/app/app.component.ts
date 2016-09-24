import { Component , Inject} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';

@Component({
    selector: 'myapp',
    templateUrl: '/app/view/app.component.html'
})
export class AppComponent{
    private title : string = "Angular 2 Application";
    private productList: any[] = [];

    constructor(@Inject(Http) private http: Http){
        let res = this.http.get("http://127.0.0.1:8080/AngularApp/product")
        .map((response: Response) => response.json())
        .do(data => console.log(data))
        .catch(this.errorHandler);

        res.subscribe(
            data => this.productList=data,
            error => console.error(error),
            () => {}
        );
    }

    public errorHandler(error: Response){
        console.error(error);
        return Observable.throw(error);
    }

}