import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from "src/environments/environment";
import { GeneralService } from "./general";
import { Login } from "../interfaces/login/login";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root',
})

export class UserService extends GeneralService{
    

    constructor(public http: HttpClient) { 
        super(http);
    }

    public autenticacion(login:Login) {
        return this.post(`authentication`,login);
    }



}