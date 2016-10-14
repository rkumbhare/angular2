import { Component , Inject} from '@angular/core';


@Component({
    selector: 'product',
    templateUrl: 'app/product/view/product.html'
})
export class ProductComponent{
    private title : string = "Angular 2 Application - Product";

    constructor(){
    }

}