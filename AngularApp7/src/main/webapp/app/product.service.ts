/**
 * Product Service with product data and logic
 */
import { Injectable, OnInit, Inject } from '@angular/core';
import {Http, Response, URLSearchParams, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Product } from './Product';

@Injectable()
export class ProductService {

    private _ratings: number[] = [1,2,3,4,5]; 
    private url: string = "/AngularApp/product";
    private searchUrl: string = "/AngularApp/product/search";

    constructor( @Inject(Http) public http: Http) {
    }

	addProduct(product): Observable<Product>{
		let headers = new Headers('content-type': 'application/json');
		let options = new RequestOptions({headers: headers});
		return this.http.put(this.url, product, options)
			.map((response: Response) => response=response.json())
			.do(data => console.log(data))
			.catch(this.errorHandler);
	}

	update(product): Observable<Product>{
		let headers = new Headers({'content-type': 'application/json'});
		let reqOptions = new RequestOptions({headers: headers});
		return this.http.post(this.url, product, reqOptions)
					.map((response: Response) => response.json())
					.do(data => console.log(data))
					.catch(this.errorHandler);
	}

    getProducts(): Observable<Product[]> {
    	console.log("Fetching All the products");
		return this.http.get(this.url)
				.map((response: Response) => response=response.json())
				.do(data => console.log(data))
				.catch(this.errorHandler);
    }
    
     getProduct(productId): Observable<Product> {
     	console.log("Fetching product by Id : " + productId);
		return this.http.get(this.url + "/" + productId)
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
    
    get ratings(): number[]{
    	return this._ratings;
    }
    
    errorHandler(error: Response){
    	console.error(error);
    	return Observable.throw(error);
    }

}