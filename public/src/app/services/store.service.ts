import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { GeneralService } from "./general";
import { Stores } from "../interfaces/admin/stores";

@Injectable({
    providedIn: 'root',
})

export class StoreService extends GeneralService{
    

    constructor(public http: HttpClient) { 
        super(http);
    }

    public stores() {
        return this.get(`stores`);
    }

    public store(id : string | null) {
        return this.get(`stores/${id}`);
    }

    public save(store : Stores) {
        return this.post(`stores`, store);
    }

    public put(store : Stores) {
        return this.update (`stores`, store.id , store);
    }

    public remove(store : Stores) {
        return this.delete (`stores`, store.id);
    }

}