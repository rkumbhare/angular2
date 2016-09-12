import {Component, Inject} from '@angular/core';
import {Product} from  './product';
import {ProductService} from './product.service';
 
@Component({
	selector: 'product-search',
	templateUrl: 'app/product-search.html'
})
export class ProductSearchComponent{
	
	private title: string = "Search Product";
	private productList: Product[];
	private query: string;
	
	constructor(@Inject(ProductService) public productService: ProductService){
		
	}
	
	searchProduct(): void{
		if(this.query==undefined || this.query==''){
			this.productList = undefined;
			return;
		}
		this.productService.search(this.query).subscribe(
			data => {this.productList=data},
			error => {console.error(error)},
			() => {}
		);
	}
	
}