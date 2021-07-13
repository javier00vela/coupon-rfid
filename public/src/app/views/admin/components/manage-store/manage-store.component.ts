import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Stores } from 'src/app/interfaces/admin/stores';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-manage-store',
  templateUrl: './manage-store.component.html',
  styleUrls: ['./manage-store.component.scss']
})
export class ManageStoreComponent implements OnInit {

  constructor(private fb: FormBuilder , private router : Router , private storeServices : StoreService,private route: ActivatedRoute) { }

  public updated:boolean = false;

  public form : FormGroup =   this.fb.group({
    "id": new FormControl(""),
    "name": new FormControl("", [Validators.required]),
    "address": new FormControl("", Validators.required),
    "phone": new FormControl("", Validators.required),
  });
  
  public messageDanger : string = '';

  public loadById(){
    
        if(this.route.snapshot.paramMap.get("idStore") != "add"){
          let id : string | null = this.route.snapshot.paramMap.get("idStore");
          this.storeServices.store(id).subscribe((store:any)=>{
            this.form.get("id")?.setValue(store.id)
            this.form.get("name")?.setValue(store.name)
            this.form.get("address")?.setValue(store.address)
            this.form.get("phone")?.setValue(store.phone)
            this.updated = true;
          })
        }
        
    
  }

  onSubmit(form:FormGroup){
   if(form.status == "VALID"){
      let store : Stores = form.value;
      if(this.updated){
        this.storeServices.put(store).subscribe((resp:any)=>{
          if(resp.message == 'ACTUALIZADO'){
            alert("Actualizado!")
            return this.router.navigate(["/admin/store"])
          }
          return 
        })
      }else{
        this.storeServices.save(store).subscribe((resp:any)=>{
          if(resp.message == 'GUARDADO'){
            alert("Guardado!")
            return this.router.navigate(["/admin/store"])
          }
          return 
        })
      }
   }
  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  ngOnInit(): void {
    this.loadById();
    console.log(this.form);
  }
}
