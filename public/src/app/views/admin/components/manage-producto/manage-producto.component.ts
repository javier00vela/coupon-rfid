import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/interfaces/admin/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-manage-producto',
  templateUrl: './manage-producto.component.html',
  styleUrls: ['./manage-producto.component.scss']
})
export class ManageProductoComponent implements OnInit {
  public image : string = "https://ducsonpower.com/wp-content/plugins/ecommerce-product-catalog/img/no-default-thumbnail.png"

  constructor(private fb: FormBuilder , private router : Router , private productServices : ProductService,private route: ActivatedRoute) { }
  
  public assignPhoto(event : any){
    console.log(event);
    this.uploadFileToServer(event , (base64:any)=>{
        this.image = base64;
        this.form.get("image")?.setValue( this.image)
        
    })
  }

  public updated:boolean = false;

  public form : FormGroup =   this.fb.group({
    "id": new FormControl(""),
    "name": new FormControl("", [Validators.required]),
    "description": new FormControl("", Validators.required),
    "image": new FormControl(""),
    "store_id": new FormControl("", Validators.required),
  });
  
  public messageDanger : string = '';

  public loadById(){
        const idstore = this.route.snapshot.paramMap.get("idStore");
        if(this.route.snapshot.paramMap.get("idProducto") != "add"){
          let id : string | null = this.route.snapshot.paramMap.get("idProducto");
          this.productServices.product(id).subscribe((product:any)=>{
            this.image = product.image;
            
            this.form.get("id")?.setValue(product.id)
            this.form.get("name")?.setValue(product.name)
            this.form.get("description")?.setValue(product.description)

            this.updated = true;
          })
        }  
        this.form.get("store_id")?.setValue(idstore)
        
  }


  uploadFileToServer(files:any , callback:any) {
    var file = files[0];
    console.log(file);
    var reader:any = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = function() {
        callback(reader.result)
    };
    reader.onerror = function() {
        console.log('there are some problems');
    };
}

  onSubmit(form:FormGroup){
   if(form.status == "VALID"){
      let product : Product = form.value;
      console.log(product);
      
      if(this.updated){
        this.productServices.put(product).subscribe((resp:any)=>{
          if(resp.message == 'ACTUALIZADO'){
            alert("Actualizado!")
            return this.router.navigate(["/admin/store"])
          }
          return 
        })
      }else{
        this.productServices.save(product).subscribe((resp:any)=>{
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
