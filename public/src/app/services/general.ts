import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root',
})

export class GeneralService {
    
    private app : string = environment.api;

    constructor(public http: HttpClient) { }

    protected get(module:string) {
        this.http.get(`${this.app}/${module}`);
    }

    protected post(module:string, data : JSON|JSON[]|Object) {
        return this.http.post(`${this.app}/${module}`, data);
    }

    protected update(module:string, id:number ,  data : JSON|JSON[]|Object) {
        this.http.put(`${this.app}/${module}/${id}`, data);
    }

    protected delete(module:string, id:number ,  data : JSON|JSON[]|Object) {
        this.http.delete(`${this.app}/${module}/${id}`);
    }

}