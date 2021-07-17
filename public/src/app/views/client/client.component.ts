import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { PersonService } from 'src/app/services/person.service';
declare const io : any ;


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  ableButton : boolean = false;
  products : any[] = [];
  person : any = {};
  constructor(private personServices : PersonService ) { }

  ngOnInit(): void {
    this.readerCodeTarget()
  }

  public process(){
    this.personServices.saveCupons(this.products).subscribe((res)=>{
        location.reload()
        alert("Actualizados Cupones")
    });
  }

  public amount(coupon:any , type:any){
    if(type == '+'){
      if(coupon.amount_user > coupon.used ){
        coupon.used += 1;
      }
    }else{
      if(coupon.used >  0 ){
        coupon.used -= 1;
      }
    }
  }

  private findTarget(rfid:string){
        this.personServices.findDataTarget(rfid).subscribe((resp:any)=>{
          if(resp.person){
            this.products = resp.coupons;
            this.person = resp.person;
            this.ableButton = true;
          }else{
            this.products = [];
            this.person= {};

          }
          this.ableButton = false;
        },()=>{
          this.products = [];
          this.person= {};
        })

    }
    
    private arrayBufferToString( buffer : any , encoding : any, callback : any ) {
    var blob = new Blob([buffer],{type:'text/plain'});
    var reader = new FileReader();
    reader.onload = function(evt:any){callback(evt.target.result);};
    reader.readAsText(blob, encoding);
  }

  public readerCodeTarget(){
    var  socket = io('http://localhost:8089');
    socket = socket.connect();
    socket.on("_RID_READER_",(data:any)=>{
      this.arrayBufferToString(data.data , "UTF-8" , (datas:any)=>{
        this.findTarget(datas)
      })
    })
  }

}
