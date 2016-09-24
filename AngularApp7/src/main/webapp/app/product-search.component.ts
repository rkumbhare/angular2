import {Component, Inject, ViewChild} from '@angular/core';
import {Product} from  './product';
import {ProductService} from './product.service';
 
@Component({
	selector: 'product-search',
	templateUrl: 'app/view/product-search.html',
	styleUrls: ['app/view/product-search.component.css']
})
export class ProductSearchComponent{
	
	private title: string = "Search Product";
	private productList: Product[];
	private query: string;
	private productName: string ;
	private selectedProduct: Product;
	
	
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
	
	ngOnInit() {
		this.productService.getProducts().subscribe(
			data => {this.productList=data},
			error => {console.error(error)},
			() => {}
		);
	}
	
	onSelect($event): void{
		this.selectedProduct = $event.item;
	}
	
	
	onSearch(){
		if(this.productName==undefined || this.productName==''){
			this.productList = undefined;
			return;
		}
		this.productService.search(this.productName).subscribe(
			data => {this.productList=data},
			error => {console.error(error)},
			() => {}
		);
	}
	
	
}