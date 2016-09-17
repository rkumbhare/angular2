import {Pipe, PipeTransform} from '@angular/core';

import {DashboardRow} from './dashboardRow';
import {Product} from './Product';

@Pipe({
    name: 'dashboardRowList'
})
export class DashboardRowListPipe implements PipeTransform{

    transform(productList: Product[], size: number): DashboardRow[]{
        let dashboardRowList = [];
        let dashboardRow = new DashboardRow();
        let counter = 0;
        for(let prod of productList){
            dashboardRow.addProduct(prod);
            counter=counter+1;
            if(counter == size){
                dashboardRowList.push(dashboardRow);
                dashboardRow = new DashboardRow();
                counter = 0;
            }
        }
        if(counter!=0){
            dashboardRowList.push(dashboardRow);
        }
        return dashboardRowList;
    }
}