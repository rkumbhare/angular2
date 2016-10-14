import {Injectable, Inject} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';



@Injectable()
export class UserService{

    constructor(@Inject(Http) private http: Http){

    }

    get(): Observable<any[]>{
        console.log("Fetching all users");
        return this.http.get("https://jsonplaceholder.typicode.com/users")
        .map((response: Response) => response.json())
        .do(data => console.log(data))
        .catch(this.errorHandler);
    }

    errorHandler(error: Response){
        console.error(error);
        return Observable.throw(error);
    }

}