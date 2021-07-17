import { Component, OnInit } from '@angular/core';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

  public persons : any = [];
  constructor(private personService:PersonService) { }

  
  public getPersons(){
    this.persons = this.personService.persons();
  }

  public delete(person:any){
    if(confirm("¿Desea eliminar este registro?")){
      this.personService.remove(person).subscribe((resp:any)=>{
          alert("Registro eliminado!");
          this.getPersons();
      });
    }
  }


  ngOnInit(): void {
    this.getPersons();
  }

}
