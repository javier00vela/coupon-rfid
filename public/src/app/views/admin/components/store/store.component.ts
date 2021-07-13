import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Stores } from 'src/app/interfaces/admin/stores';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  public stores : Observable<any> = new Observable<any>();

  constructor(private storeService: StoreService) { }

  public getStores(){
    this.stores = this.storeService.stores();
  }

  public delete(store:Stores){
    if(confirm("¿Desea eliminar este registro?")){
      this.storeService.remove(store).subscribe((resp)=>{
          alert("Registro eliminado!");
          this.getStores();
      });
    }
  }

  ngOnInit(): void {
    this.getStores();
  }

}
