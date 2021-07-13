import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { GeneralService } from "./general";
import { Plans } from "../interfaces/admin/plans";

@Injectable({
    providedIn: 'root',
})

export class PlanService extends GeneralService{
    

    constructor(public http: HttpClient) { 
        super(http);
    }

    public plans() {
        return this.get(`plans`);
    }

    public plan(id : string | null) {
        return this.get(`plans/${id}`);
    }

    public save(plans : Plans) {
        return this.post(`plans`, plans);
    }

    public put(plans : Plans) {
        return this.update (`plans`, plans.id , plans);
    }

    public remove(plan : Plans) {
        return this.delete (`plans`, plan.id);
    }

}