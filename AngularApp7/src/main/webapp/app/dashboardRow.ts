import {Product} from './Product';

export class DashboardRow{
    private _productList: Product[] = [];

    get productList(): Product[]{
        return this._productList;
    }

    addProduct(product): void{
        this._productList.push(product);
    }

}