import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenHelper } from 'src/app/helpers/token.services';
import { Login } from 'src/app/interfaces/login/login';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder , private userServices : UserService , private router : Router) { }

  public formLogin : FormGroup =   this.fb.group({
    "email": new FormControl("", [Validators.required , Validators.email]),
    "password": new FormControl("", Validators.required),
  });
  
  public messageDanger : string = '';

  onSubmitLogin(form:FormGroup){
   if(form.status == "VALID"){
      const login : Login =  form.value;
      this.userServices.autenticacion(login).subscribe((resp:any)=>{
          this.messageDanger = '';
          if(resp.message){
            this.messageDanger = resp.message
          }

          if(resp.token){
            TokenHelper.setSession(resp)
            this.router.navigate(["/admin/main"])
          }

      })
   }
  }
  get f(): { [key: string]: AbstractControl } {
    return this.formLogin.controls;
  }

  ngOnInit(): void {
    console.log(this.formLogin);
    
  }

}
