import {Component, Input, Output, EventEmitter, ElementRef, Inject} from '@angular/core';
import {Product} from './Product';


@Component({
    selector: 'product-info-model',
    templateUrl: 'app/product-info-model.html',
    styleUrls: ['app/model-dialog.css']
})
export class ProductInfoModelComponent{

    @Input() product : Product;
    @Output() closeModel: EventEmitter<string> = new EventEmitter<string>();
    
    
    constructor(@Inject(ElementRef)private ele: ElementRef){

    }

    openModel(){
        console.log("opening product-info-model");
    }

    onCloseModel(){
        this.closeModel.emit("closing product-info-model");
    }

}