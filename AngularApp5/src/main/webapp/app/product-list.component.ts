import { Component, Inject } from 'angular2/core';
import { Product } from './Product';
import { ProductFilterPipe } from './product-filter.pipe';
import { ProductService } from './product.service';
	
@Component({
	selector: 'product-list',
	templateUrl: 'product-list.html',
	pipes: [ProductFilterPipe]
})

export class ProductListComponent{
	productList: Product[];
	productService: ProductService;
	title: string;
	
	constructor(@Inject(ProductService) ps: ProductService){
		this.title = "Product List";
		this.productService = ps;
	}
	
	ngOnInit(){
 		console.log("Init - product-list.component");	
 		this.productList = this.productService.getProducts();	
 	}
	
}