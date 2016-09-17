import { Component, Inject } from '@angular/core';
import { Product } from './Product';
import { ProductService } from './product.service';

@Component({
    selector: 'product-list',
    templateUrl: 'app/product-list.html',
})

export class ProductListComponent {
    productList: Product[];
    title: string;
   	filterBy: string;

    constructor( @Inject(ProductService) public productService: ProductService) {
        this.title = "Product List";
    }

    ngOnInit() {
        console.log("Init - product-list.component");
        this.productService.getProducts()
        .subscribe(
        	products => { this.productList = products},
        	error => { console.error(error)},
        	() => {}
        );
        				
    }

}