import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { GeneralService } from "./general";


@Injectable({
    providedIn: 'root',
})

export class PersonService extends GeneralService{
    
    constructor(public http: HttpClient) { 
        super(http);
    }

    public person(id : string | null) {
        return this.get(`persons/${id}`);
    }

    public persons() {
        return this.get(`persons`);
    }

    public save(person : any) {
        return this.post(`persons`, person);
    }

    public put(person : any) {
        return this.update (`persons`, person.id , person);
    }

    public remove(person : any) {
        return this.delete (`persons`, person.id);
    }

}