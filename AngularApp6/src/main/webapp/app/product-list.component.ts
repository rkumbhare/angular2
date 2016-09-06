import { Component, Inject } from '@angular/core';
import { Product } from './Product';
import { ProductService } from './product.service';

@Component({
    selector: 'product-list',
    templateUrl: 'product-list.html',
})

export class ProductListComponent {
    productList: Product[];
    productService: ProductService;
    title: string;
   	filterBy: string;

    constructor( @Inject(ProductService) ps: ProductService) {
        this.title = "Product List";
        this.productService = ps;
        this.filterBy = "ksdjlf";
    }

    ngOnInit() {
        console.log("Init - product-list.component");
        this.productList = this.productService.getProducts();
    }

}