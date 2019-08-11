import { Component, OnInit } from '@angular/core';
import { PronosticoService } from '../services/pronostico.service';
import {UserService} from '../services/user.service';
import {Pronostico} from '../models/pronostico';

@Component({
  selector: 'app-pronosticos',
  templateUrl: './pronosticos.component.html',
  providers : [
  	PronosticoService,
  	UserService
  ]
})
export class PronosticosComponent implements OnInit {
	public identity;
	public token;
	public pronosticos:any[];
	public responsive_movil;
	public pronosticosFiltrados:any[];
	public successAverage;
  public yield;
  public busqueda;
  public sinResultados;
  public pronosticosCargados: boolean = false;
  public allPronosticos:boolean = false;
  public activeSport: string = '';
  public totalFilteredResults: Number = 0;

  constructor(
  	private _userService: UserService,
  	private _pronosticoService: PronosticoService
  	) {
  		this.identity = _userService.getIdentity();
			this.token = _userService.getToken();
			
			if(this.identity == null){
				this.identity = {role: 'ROLE_USER'};
			}
	}

  ngOnInit() {
  	this.getPronosticos(0);
  	var mediaquery = window.matchMedia("(min-width: 900px)");
      if (mediaquery.matches) {
         this.responsive_movil = false;
      } else {
        this.responsive_movil = true;
      }
      document.getElementById('scroll-to-top').onclick = function () {
          scrollTo(document.body, 0, 100);
          }
      
          function scrollTo(element, to, duration) {
              if (duration < 0) return;
              var difference = to - element.scrollTop;
              var perTick = difference / duration * 2;
      
          setTimeout(function() {
              element.scrollTop = element.scrollTop + perTick;
              scrollTo(element, to, duration - 2);
          }, 2);
      }
  }

  getPronosticos(from, sport:string = ''){		
	    this.activeSport = sport;
		this._pronosticoService.getPronosticos(this.token, from, sport).subscribe(
			(response: any) =>{				
				if(!response.pronosticos){					
				}else{
					if(from == 0){
						this.totalFilteredResults = 0;
						this.pronosticosFiltrados = response.pronosticos;
					}else{
						let loadedData:Object [] = [];
						loadedData = this.pronosticosFiltrados;
						let newData = response.pronosticos;
						this.pronosticosFiltrados = loadedData.concat(newData);
					}
					this.totalFilteredResults += response.pronosticos.length;
					// this.pronosticosFiltrados = response.pronosticos;		
         			this.allPronosticos = true;			
				}
			},
			error =>{
				var alertMessage = <any>error;
	  			/*if(alertMessage!=null){  				
	  				this.alertMessage = 'Error, EL artista no ha podido ser guardado';
	  				console.log(error);
	  			}*/
			});
  }

  getLastPronosticos(){
    this._pronosticoService.getLastPronosticos(this.token).subscribe(
      (response: any) =>{        
        if(!response.pronosticos){          
        }else{
          this.pronosticos = response.pronosticos;
          this.pronosticosFiltrados = response.pronosticos; 
          this.pronosticosCargados = true;        
        }
      },
      error =>{
        var alertMessage = <any>error;
          /*if(alertMessage!=null){         
            this.alertMessage = 'Error, EL artista no ha podido ser guardado';
            console.log(error);
          }*/
      });
  }

  deletePronostico(id){
		this._pronosticoService.deletePronostico(this.token, id).subscribe(
			response=>{				
				this.getPronosticos(0);
			},
			error=>{
				console.log(error);
			}
		)
  }

  filtrar(deporte){
  		this.pronosticosFiltrados = [];
  		if(deporte){
  			if(deporte == 'all'){
  				for (var pronostico in this.pronosticos) 
		         { 
		             this.pronosticosFiltrados.push(this.pronosticos[pronostico]);
		         }
  			}else{
  				for (var pronostico in this.pronosticos) 
		         { 
		             if (this.pronosticos[pronostico] && this.pronosticos[pronostico].deporte && this.pronosticos[pronostico].deporte == deporte) {
		             	this.pronosticosFiltrados.push(this.pronosticos[pronostico]);
		         	}
		         }
  			}
  			if(this.pronosticosFiltrados.length < 1){
  				this.sinResultados = true;
  			}else{
  				this.sinResultados = false;
  			}
	  			
  		}
  		  	
	 		
  }


}
