import {Component, ViewChild, Inject} from '@angular/core';
import {Product} from './Product';
import {DashboardRow} from './dashboardRow';
import {ProductInfoModelComponent} from './product-info-model.component';
import {ProductService} from './product.service';

@Component({
    selector: 'product-dashboard',
    templateUrl: 'app/view/product-dashboard.html',
    styleUrls : ['app/view/product-dashboard.component.css']
})

export class ProductDashboardComponent{
 
 	private productList: Product[];
    public selectedProduct: Product;

    @ViewChild(ProductInfoModelComponent) productInfoModel: ProductInfoModelComponent;

    constructor(@Inject(ProductService) private productService: ProductService){
    	console.log("Init - product-dashboard.component");
        this.productService.getProducts()
        .subscribe(
        	products => { this.productList = products},
        	error => { console.error(error)},
        	() => {}
        );
    }
    
    openProductInfoModel(product) : boolean{
        console.log("view product info : " + product);
        this.selectedProduct = product;
        this.productInfoModel.openModel();
        return false;
    }

    closeProductInfoModel($event){
        console.log($event);
        this.selectedProduct = undefined;
    }

}