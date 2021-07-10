import { Injectable } from "@angular/core";
import * as moment from "moment";

@Injectable({
  providedIn : 'root'
})
export class TokenHelper {

    public static setSession(authResult:any) {
        localStorage.setItem('token', authResult.token);
    }    
    
    public isAuthed(){
        const token = localStorage.getItem('token');
       return ( token !== null && token !== undefined && token !== '' ? true : false );
    }

    public infoUser(){
        return {id : 1}
    }

    public  logout(callaback: ()=> void) {
        localStorage.removeItem("token");
        localStorage.removeItem("expires_at");
        callaback();
    }

    public isLoggedIn() {
        return moment().isBefore(this.getExpiration());
    }

    public isLoggedOut() {
        return !this.isLoggedIn();
    }

    public getExpiration() {
        const expiration:any = localStorage.getItem("expires_at");
        const expiresAt = JSON.parse(expiration);
        return moment(expiresAt);
    }   
    
    public getRole() : number{
        return 2;
    }
}
          
          
