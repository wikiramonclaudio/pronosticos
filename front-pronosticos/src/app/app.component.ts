import { Component } from '@angular/core';
import { UserService} from './services/user.service';
import { Pronostico} from './models/pronostico';
import { PronosticoService } from './services/pronostico.service';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers : [
    PronosticoService,
    UserService
  ],
  styleUrls: ['./app.component.css']
})

export class AppComponent {  
  public identity;
  public token;   
  public successAverage;
  public yield;
  public pronosticos:any[];
  showLogin = false;
  public user: User;
  public newUser: User;
  public errorMessage;
  public alertRegister;

  constructor(
     private _route:ActivatedRoute,
     private _router:Router,
     private _pronosticoService : PronosticoService,
     private _userService : UserService,
  ) 
  { 
     this.identity = _userService.getIdentity();
     this.token = _userService.getToken();
     this.user = new User("","","","","","ROLE_USER","");
     this.newUser = new User("","","","","","ROLE_USER","");
  }

  ngOnInit(){
    this.getPronosticos();
  }

  /*método que cierra la sesión*/
  logout(){
    localStorage.removeItem('identity');
    localStorage.removeItem('token');
    this.identity=null;
    this.token=null;
    /*vació el localStorage para cerrar la sesión del usuario*/
    localStorage.clear();
    this._router.navigate(['home']);
  }
  
  getPronosticos(){   
    /*Llamo al servicio para guarar un nuevo artista en la base de datos*/
    this._pronosticoService.getPronosticos(this.token).subscribe(
      (response: any) =>{        
        if(!response.pronosticos){
            
        }else{
          this.pronosticos = response.pronosticos;
          this.calcularPorcentaje();
          this.calcularYield();
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
  
  /*función que calcuila el porcentaje de aceirto*/
  calcularPorcentaje = function() {
      var acertadas = 0;
      var nulas = 0;
      for (var index in this.pronosticos) 
      {
          if (this.pronosticos[index].resultado == 'Ganada' || this.pronosticos[index].resultado == 'ganada') {
              acertadas = acertadas + 1;
          } else if (this.pronosticos[index].resultado == 'Cancelado' || this.pronosticos[index].resultado == 'cancelado' || !this.pronosticos[index].finalizado) {
              nulas = nulas + 1;
          }
      }
      var pronosticosTotales = this.pronosticos.length - nulas;
      this.successAverage = acertadas * 100 / pronosticosTotales;
      
  };

  /*función que calcula el yield del total de los pronosticos*/
  calcularYield = function() {
      var beneficiosNetos = 0;            
      var ganadas = 0;
      var perdidas = 0;
      var nulos = 0;
      var cantidadTotalApostada = 0;   
      for (var index in this.pronosticos){
          if (this.pronosticos[index].finalizado && (this.pronosticos[index].resultado == 'Ganada' || this.pronosticos[index].resultado == 'ganada')) {
              cantidadTotalApostada = cantidadTotalApostada + 10;
              var beneficio = (10 * this.pronosticos[index].cuota - 10);
              beneficiosNetos = beneficiosNetos + beneficio;
              ganadas = ganadas + 1;
          } else if (this.pronosticos[index].resultado == 'cancelada' || this.pronosticos[index].resultado == 'cancelado' || !this.pronosticos[index].finalizado) {
              nulos = nulos + 1;
          } else {
              if(this.pronosticos[index].finalizado){
                  cantidadTotalApostada = cantidadTotalApostada +10;
                  beneficiosNetos = beneficiosNetos - 10;
                  perdidas = perdidas + 1;
              }
          }
      }      
      this.yield = beneficiosNetos / cantidadTotalApostada * 100; 
  };
  
  /*///////////////////////////////////FUNCIONES PARA EL LOGIN/*////////////////////////////////////*/
  /*FUncion invocada cuando se pulsa el botón de entrar en LOGIN*/
  public onSubmit(){    
    this.user.email = this.user.email.toLowerCase();
    /*conseguir los datos del usuario identificadp*/
    this._userService.signup(this.user).subscribe(
      (response: any) => {
        let identity = response.user;
        this.identity = identity;


        if(!this.identity._id){
          alert('El usuario no está identificadp');
        }else{
          /*creamos la sesion en local storage*/
        localStorage.setItem('identity', JSON.stringify(identity));

          /*Conseguir el token para enviarselo a cada petición http*/
          this._userService.signup(this.user, 'true').subscribe(            
            (response: any) => {
              let token = response.token;
              this.token = token;
              if(!this.token){
                alert('El token no se ha generado');
              }else{                
                /*creamos la sesion en local storage para tener el token disponible*/
              localStorage.setItem('token', token); 
              this.user = new User("","","","","","ROLE_USER","");
              this._router.navigate(['/home/']);        
              this.showLogin = false;

                /*Conseguir el token para enviarselo a cada petición http*/               
              }
            },
            error => {            
              var errorMessage = <any>error;
              if(errorMessage!=null){         
                this.errorMessage = 'El usuario no ha podido loggearse';
              }
            }
          );
        }
      },
      error => {
        var errorMessage = <any>error;
        if(errorMessage!=null){         
          this.errorMessage = 'El usuario no ha podido loggearse';          
        }
      }
    );
  }  

  /*método para registrar un nueuvo usuario, se invoca cuando se envío el formulartio d registro*/
  public register(){
     this._userService.saveUser(this.newUser).subscribe(
      (response: any)=>{
      let user = response.user;
      this.newUser = user;
      if(!user._id){
        alert('Error al registrarse');
        this.alertRegister = 'Error al registrar el usuario';
      }else{
        this.alertRegister = 'El registro se ha realizado correctamente, identifícate con ' + this.newUser.email;
        this.newUser = new User("","","","","","ROLE_USER","");
      }
      },
      error=>{        
        var errorMessage = <any>error;
        if(errorMessage!=null){         
          this.alertRegister = 'Error al registrar el usuario';          
        }

      });
  }
}
