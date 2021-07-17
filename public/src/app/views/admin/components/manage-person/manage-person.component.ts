import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonService } from 'src/app/services/person.service';
import { PlanService } from 'src/app/services/plans';
declare const io : any ;

@Component({
  selector: 'app-manage-person',
  templateUrl: './manage-person.component.html',
  styleUrls: ['./manage-person.component.scss']
})
export class ManagePersonComponent implements OnInit {
  public plansList:any = [];
  public updated:boolean = false;
  constructor(private fb: FormBuilder , private planService : PlanService , private personService : PersonService , private router : Router,private route: ActivatedRoute) { }

  public form : FormGroup =   this.fb.group({
    "id": new FormControl(""),
    "name": new FormControl("", [Validators.required]),
    "lastname": new FormControl("", [Validators.required]),
    "type_document": new FormControl("", [Validators.required]),
    "document": new FormControl("", [Validators.required]),
    "phone": new FormControl("", [Validators.required]),
    "type_asign": new FormControl("", [Validators.required]),
    "rol": new FormControl("2"),
    "rfid": new FormControl("", [Validators.required]),
  });
  
  public messageDanger : string = '';

  onSubmit(form:FormGroup){
   if(form.status == "VALID"){
    if(!this.updated){
     this.personService.save(form.value).subscribe((resp:any)=>{
        if(resp.message != 'GUARDADO'){
          return alert(resp.message)
        }
        return this.router.navigate(["/admin/person"])
      })
    }else{
      console.log(form.value);
      
      this.personService.put(form.value).subscribe((resp:any)=>{
        if(resp.message != 'ACTUALIZADO'){
          return alert(resp.message)
        }
        return this.router.navigate(["/admin/person"])
      })
    }
   }
  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  public loadById(){
    if(this.route.snapshot.paramMap.get("idPerson") != "add"){
      let id : string | null = this.route.snapshot.paramMap.get("idPerson");
      this.personService.person(id).subscribe((person:any)=>{
        this.form.get("id")?.setValue(person.id)
        this.form.get("name")?.setValue(person.name)
        this.form.get("lastname")?.setValue(person.lastname)
        this.form.get("phone")?.setValue(person.phone)
        this.form.get("rfid")?.setValue(person.rfid)
        this.form.get("type_document")?.setValue(person.type_document)
        this.form.get("type_document")?.setValue(person.type_document)
        this.form.get("document")?.setValue(person.document)
        this.updated = true;
      })
    }
}

  ngOnInit(): void {
    this.readerCodeTarget()
    this.plans()
    this.loadById()
  }

  private arrayBufferToString( buffer : any , encoding : any, callback : any ) {
    var blob = new Blob([buffer],{type:'text/plain'});
    var reader = new FileReader();
    reader.onload = function(evt:any){callback(evt.target.result);};
    reader.readAsText(blob, encoding);
  }

  public plans(){
    this.plansList = this.planService.plans();
  }

  public readerCodeTarget(){
    var  socket = io('http://localhost:8089');
    socket = socket.connect();
    socket.on("_RID_READER_",(data:any)=>{
      this.arrayBufferToString(data.data , "UTF-8" , (datas:any)=>{
         this.form.get("rfid")?.setValue((datas)); 
      })
    })
  }



}
