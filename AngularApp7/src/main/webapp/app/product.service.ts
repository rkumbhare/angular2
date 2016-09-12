/**
 * Product Service with product data and logic
 */
import { Injectable, OnInit, Inject } from '@angular/core';
import {Http, Response, URLSearchParams} from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Product } from './Product';

@Injectable()
export class ProductService {

    private productList: Product[];
    private url: string = "/AngularApp/product";
    private searchUrl: string = "/AngularApp/product/search";

    constructor( @Inject(Http) public http: Http) {
    }

    getProducts(): Observable<Product[]> {
		return this.http.get(this.url)
				.map((response: Response) => response=response.json())
				.do(data => console.log(data))
				.catch(this.errorHandler);
    }
    
    search(query: string): Observable<Product[]>{
    	console.log("Search Product by : "+ query );
    	let params: URLSearchParams = new URLSearchParams();
    	params.set('query', query);
    	return this.http.get(this.searchUrl, {search: params})
    				.map((response: Response) => response=response.json())
    				.do(data => console.log(data))
					.catch(this.errorHandler);
    }
    
    
    errorHandler(error: Response){
    	console.error(error);
    	return Observable.throw(error);
    }

}