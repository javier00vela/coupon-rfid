import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-manage-person',
  templateUrl: './manage-person.component.html',
  styleUrls: ['./manage-person.component.scss']
})
export class ManagePersonComponent implements OnInit {

  constructor(private fb: FormBuilder ) { }

  public form : FormGroup =   this.fb.group({
    "name": new FormControl("", [Validators.required]),
    "lastname": new FormControl("", [Validators.required]),
    "type_document": new FormControl("", [Validators.required]),
    "document": new FormControl("", [Validators.required]),
    "phone": new FormControl("", [Validators.required]),
    "rol": new FormControl("2"),
    "rfid": new FormControl(""),
  });
  
  public messageDanger : string = '';

  onSubmit(form:FormGroup){
   if(form.status == "VALID"){
     
   }
  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  ngOnInit(): void {
    console.log(this.form);
  }

}
