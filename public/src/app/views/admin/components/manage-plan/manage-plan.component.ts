import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Plans } from 'src/app/interfaces/admin/plans';
import { PlanService } from 'src/app/services/plans';

@Component({
  selector: 'app-manage-plan',
  templateUrl: './manage-plan.component.html',
  styleUrls: ['./manage-plan.component.scss']
})
export class ManagePlanComponent implements OnInit {

  constructor(private fb: FormBuilder , private router : Router , private planServices : PlanService,private route: ActivatedRoute) { }

  public updated:boolean = false;

  public form : FormGroup =   this.fb.group({
    "id": new FormControl(""),
    "name": new FormControl("", [Validators.required]),
    "description": new FormControl("", Validators.required),
  });
  
  public messageDanger : string = '';

  public loadById(){
    
        if(this.route.snapshot.paramMap.get("idPlan") != "add"){
          let id : string | null = this.route.snapshot.paramMap.get("idPlan");
          this.planServices.plan(id).subscribe((plan:any)=>{
            this.form.get("id")?.setValue(plan.id)
            this.form.get("name")?.setValue(plan.name)
            this.form.get("description")?.setValue(plan.description)
            this.updated = true;
          })
        }
        
    
  }

  onSubmit(form:FormGroup){
   if(form.status == "VALID"){
      let plan : Plans = form.value;
      if(this.updated){
        this.planServices.put(plan).subscribe((resp:any)=>{
          if(resp.message == 'ACTUALIZADO'){
            alert("Actualizado!")
            return this.router.navigate(["/admin/plan"])
          }
          return 
        })
      }else{
        this.planServices.save(plan).subscribe((resp:any)=>{
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
