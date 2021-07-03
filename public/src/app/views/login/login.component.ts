import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  public formLogin : FormGroup =   this.fb.group({
    "email": new FormControl("", [Validators.required , Validators.email]),
    "password": new FormControl("", Validators.required),
  });
  

  onSubmitLogin(form:FormGroup){
   if(form.status == "VALID"){
    console.log(form);
   }
  }
  get f(): { [key: string]: AbstractControl } {
    return this.formLogin.controls;
  }

  ngOnInit(): void {
    console.log(this.formLogin);
    
  }

}
