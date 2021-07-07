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



   public arrayBufferToString( buffer : any , encoding : any, callback : any ) {
    var blob = new Blob([buffer],{type:'text/plain'});
    var reader = new FileReader();
    reader.onload = function(evt:any){callback(evt.target.result);};
    reader.readAsText(blob, encoding);
}


  constructor() {
    var  socket = io('http://localhost:8089');
    socket = socket.connect();

    console.log(socket);
    
    
    socket.on("_RID_READER_",(data:any)=>{
      console.log(data);
      this.arrayBufferToString(data.data , "UTF-8" , (datas:any)=>{
         this.tarjetaData = datas;
          
      })
    })
    


  }

  


}
