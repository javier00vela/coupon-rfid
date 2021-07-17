import { Component, OnInit } from '@angular/core';
import { Boxes } from 'src/app/interfaces/admin/box';
declare const io : any ;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
   public tarjetaData : string = '';
    public boxes : Boxes[] = [
      { title : 'Personas' , icon:'users' , number:15},
      { title : 'Tiendas' , icon:'apple' , number:20},
      { title : 'Planes' , icon:'cubes' , number:3}
    ] 


  constructor() {
  }


}
