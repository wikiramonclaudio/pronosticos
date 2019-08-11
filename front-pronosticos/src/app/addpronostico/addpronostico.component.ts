import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { UserService} from '../services/user.service';
import { Pronostico} from '../models/pronostico';
import { PronosticoService } from '../services/pronostico.service';
import { NgForm }    from '@angular/forms';

@Component({
  selector: 'app-addpronostico',
  templateUrl: './addpronostico.component.html',
  providers : [
  	PronosticoService,
  	UserService
  ]
})
export class AddpronosticoComponent {
  public pronosticoId;
  public modo;
  public pronostico:any;
  public active = false;
  public identity;
  public token;     
  public titulo;
  constructor(
  private _route:ActivatedRoute,
	private _router:Router,
	private _pronosticoService : PronosticoService,
	private _userService : UserService
	) 
{ 
	this.identity = _userService.getIdentity();
	this.token = _userService.getToken();
	this.pronostico = new Pronostico("","","",null,"","","",1,null,"",false,"");
	this.titulo = "Crear nuevo pronóstico";
}

  ngOnInit() {
  		this._route.params.forEach((params: Params) => {
		 	let id = params['id'];		 	
			this.pronosticoId = id;			
			this.modo = params['modo'];
			this.active=true;			
									
		});		
  }

  onSubmit(newpronostico){
  	if(this.pronostico.cuota && this.pronostico.descripcion && this.pronostico.partido && this.pronostico.imageUrl
  	&& this.pronostico.hora && this.pronostico.fecha && this.pronostico.apuesta && this.pronostico.deporte){
  		var fecha = new Date();
  		fecha.setHours(fecha.getHours());  		
  		this.pronostico.fecha_publicacion = fecha;
  		console.log(this.pronostico.fecha_publicacion);
  		this.pronostico.finalizado = false;
  		this.pronostico.resultado = "";
			this._pronosticoService.addPronostico(this.token, this.pronostico).subscribe(
			(response: any) =>{
				if(!response.pronostico){					
				}else{					 
					this._router.navigate(['./home']);
				}
			},
			error =>{
				var alertMessage = <any>error;
	  			if(alertMessage!=null){  					  			
	  				console.log(error);
	  			}
			});
  	}else{
  		alert('Rellena bien los campos');
  	}
  }

}
