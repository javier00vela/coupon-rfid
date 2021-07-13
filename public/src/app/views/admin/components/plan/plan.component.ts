import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Plans } from 'src/app/interfaces/admin/plans';
import { PlanService } from 'src/app/services/plans';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss']
})
export class PlanComponent implements OnInit {

  public plans : Observable<any> = new Observable<any>();

  constructor(private planService: PlanService) { }

  public getPlans(){
    this.plans = this.planService.plans();
  }

  public delete(plan:Plans){
    if(confirm("¿Desea eliminar este registro?")){
      this.planService.remove(plan).subscribe((resp)=>{
          alert("Registro eliminado!");
          this.getPlans();
      });
    }
  }

  ngOnInit(): void {
    this.getPlans();
  }

}
