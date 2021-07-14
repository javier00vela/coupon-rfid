import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/app/interfaces/admin/product';
import { ProductService } from 'src/app/services/product.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  public title : string = '';
  public idProduct : number = 0;
  constructor(private storeServices : StoreService, private productService : ProductService,  private route: ActivatedRoute) { }


  public products : Observable<any> = new Observable<any>();
  public idStore : number = 1;

  public getProducts(){
    this.products = this.productService.products(this.idStore);
  }

  public delete(product:Product){
    if(confirm("¿Desea eliminar este registro?")){
      this.productService.remove(product).subscribe((resp)=>{
          alert("Registro eliminado!");
          this.getProducts();
      });
    }
  }

  public loadStoreById(){
      let id : any = this.route.snapshot.paramMap.get("idStore");
      this.idStore = id;
      this.storeServices.store(id).subscribe((store:any)=>{
          this.title = store.name;
          this.idProduct = store.id;
      })  
  }


  ngOnInit(): void {
    this.loadStoreById();
    this.getProducts();
  }

}
