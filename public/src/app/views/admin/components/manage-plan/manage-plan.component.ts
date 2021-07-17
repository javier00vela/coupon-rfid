import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Plans } from 'src/app/interfaces/admin/plans';
import { Product } from 'src/app/interfaces/admin/product';
import { PlanService } from 'src/app/services/plans';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-manage-plan',
  templateUrl: './manage-plan.component.html',
  styleUrls: ['./manage-plan.component.scss']
})
export class ManagePlanComponent implements OnInit {

  constructor(private fb: FormBuilder , private router : Router , private planServices : PlanService, private productServices : ProductService,private route: ActivatedRoute) { }

  public optionItems:any = [];

  public updated:boolean = false;

  public selected:any[] = [];

  public form : FormGroup =   this.fb.group({
    "id": new FormControl(""),
    "name": new FormControl("", [Validators.required]),
    "description": new FormControl("", Validators.required),
    "products" : new FormControl("", Validators.required),
  });
  
  public messageDanger : string = '';

  public loadById(){
    
    
        if(this.route.snapshot.paramMap.get("idPlan") != "add"){
          let id : string | null = this.route.snapshot.paramMap.get("idPlan");
          this.productServices.productsPlan(id).subscribe((res:any)=>{
            res.map((product:any)=>{
              this.optionItems.push(
                {id: product.id , text: product.name , amount : product.amount}
              )
            })
          })
          this.planServices.plan(id).subscribe((plan:any)=>{
            this.form.get("id")?.setValue(plan.id)
            this.form.get("name")?.setValue(plan.name)
            this.form.get("description")?.setValue(plan.description)
            this.updated = true;
          })
        }else{
          this.productServices.productsAll().subscribe((res:any)=>{
            res.map((product:any)=>{
              this.optionItems.push(
                {id: product.id , text: product.name , amount : product.amount}
              )
            })
          })
        }
        
    
  }


  onSubmit(form:FormGroup){
    this.form.get("products")?.setValue(this.optionItems)
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
            return this.router.navigate(["/admin/plan"])
          }
          return 
        })
      }
   }
  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  ngOnInit() {
    this.loadById();

  }


}
