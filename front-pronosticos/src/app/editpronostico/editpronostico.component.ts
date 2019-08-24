import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { UserService} from '../services/user.service';
import { Pronostico} from '../models/pronostico';
import { PronosticoService } from '../services/pronostico.service';
import { NgForm }    from '@angular/forms';

@Component({
  selector: 'edit-addpronostico',
  templateUrl: '../addpronostico/addpronostico.component.html',
  providers : [
  	PronosticoService,
  	UserService
  ]  
})
export class EditpronosticoComponent implements OnInit {
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
	this.titulo = "Editar pronóstico";
	this.pronostico = new Pronostico("eeee","","",null,"","","",1,null,"",false,"");
}

  ngOnInit() {
  		this._route.params.forEach((params: Params) => {  			
		 	let id = params['id'];		 	
			this.pronosticoId = '/' + id;					
							
			this._pronosticoService.getPronostico(this.token, this.pronosticoId).subscribe(
		  		(response: any)=>{  			  			
		  			if(!response.pronostico){

		  			}else{		  				
						this.pronostico = response.pronostico;
						this.active = true;
		  			}	
		  			
		  		},
		  		error=>{
		  			console.log(error);  			  			
		  		}
		  	)										
		});		
  }

  onSubmit(newpronostico){
  			  
  	    /*Llamo al servicio para guarar un nuevo artista en la base de datos*/
		this._pronosticoService.editPronostico(this.token, this.pronostico._id, this.pronostico).subscribe(
			(response: any) =>{
				console.log(response);
				if(!response.pronostico){

				}else{					
					this._router.navigate(['./pronosticos']);
				}
			},
			error =>{
				var alertMessage = <any>error;
	  			if(alertMessage!=null){  					  			
	  				console.log(error);
	  			}
		});
  }

  getPronostico(pruebas){
    	
  }

}
