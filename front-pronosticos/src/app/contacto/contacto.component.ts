import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html'
})
export class ContactoComponent implements OnInit {
  public datosContacto;
  public submitted;
  public statusOK;
  constructor(
    private _userService : UserService
  ) {
    this.datosContacto = {nombre : "", email : "", mensaje : ""};  
  }

  ngOnInit() {
    
  }
  
  onSubmit(){    
    if(this.datosContacto.nombre && this.datosContacto.email && this.datosContacto.mensaje){
        this.submitted = true;
        this._userService.enviarMail(this.datosContacto).subscribe(
          response=>{
            this.datosContacto = {nombre : "", email : "", mensaje : ""};     
            this.submitted = false;
            this.statusOK = true;  
            setTimeout(function(){
              this.statusOK = false;  
            }, 3000)            
          },
          error=>{
            console.log(error);
          })
      }
  }

}
