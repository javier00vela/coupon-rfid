import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { GeneralService } from "./general";
import { Product } from "../interfaces/admin/product";


@Injectable({
    providedIn: 'root',
})

export class ProductService extends GeneralService{
    

    constructor(public http: HttpClient) { 
        super(http);
    }

    public products(idStore:number) {
        return this.get(`products/store/${idStore}`);
    }

    public product(id : string | null) {
        return this.get(`products/${id}`);
    }

    public productsAll() {
        return this.get(`products`);
    }

    public productsPlan(plan_id : any) {
        return this.get(`products/plan/${plan_id}`);
    }

    public save(product : Product) {
        return this.post(`products`, product);
    }

    public put(product : Product) {
        return this.update (`products`, product.id , product);
    }

    public remove(product : Product) {
        return this.delete (`products`, product.id);
    }

}