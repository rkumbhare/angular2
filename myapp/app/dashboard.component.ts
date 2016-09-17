import {Component, ViewChild} from '@angular/core';
import {Product} from './Product';
import {DashboardRow} from './dashboardRow';
import {ProductInfoModelComponent} from './product-info-model.component';

@Component({
    selector: 'dashboard',
    templateUrl: 'app/dashboard.html',
    styleUrls : ['app/dashboard.component.css']
})
export class DashboardComponent{

    private productList: Product[];
    private  DEFAULT_ROW_SIZE = 3;
    private rowItemCounter: number;
    private dashboardRows: DashboardRow[] = [];
    public selectedProduct: Product;

    @ViewChild(ProductInfoModelComponent) productInfoModel: ProductInfoModelComponent;

    constructor(){
        this.productList = [
            {productName: 'Dettol Soap', productCode: 'Prod1001', description: 'Dettol Soap', price: 50.50, available: 50, rating:5},
            {productName: 'Lifeboy Soap', productCode: 'Prod1002', description: 'Lifeboy Soap', price: 30.50, available: 30, rating:3},
            {productName: 'Lux Soap', productCode: 'Prod1003', description: 'Lux Soap', price: 40.50, available: 20, rating:2},
            {productName: 'Santoor Soap', productCode: 'Prod1004', description: 'Santoor Soap', price: 40.50, available: 40, rating:4},
            {productName: 'Dove Soap', productCode: 'Prod1005', description: 'Dove Soap', price: 60.50, available: 25, rating:4},
            {productName: 'Fair & Lovely cream', productCode: 'Prod1006', description: 'Fair & Lovely cream', price: 70.00, available: 10, rating:2},
            {productName: 'Dabur Hair Oil', productCode: 'Prod1007', description: 'Dabur Hair Oil', price: 30.50, available: 20, rating:3},
            {productName: 'Colgate ToothPaste', productCode: 'Prod1008', description: 'Colgate ToothPaste', price: 40.50, available: 20, rating:2}
        ];
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