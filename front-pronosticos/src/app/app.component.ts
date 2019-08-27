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
    
  }

  /*método que cierra la sesión*/
  logout(){
    localStorage.removeItem('identity');
    localStorage.removeItem('token');
    this.identity = null;
    this.token = null;
    /*vació el localStorage para cerrar la sesión del usuario*/
    localStorage.clear();
    this._router.navigate(['home']);
    
  }


  /*///////////////////////////////////FUNCIONES PARA EL LOGIN/*////////////////////////////////////*/
  /*FUncion invocada cuando se pulsa el botón de entrar en LOGIN*/
  // public onSubmit(){    
  //   this.user.email = this.user.email.toLowerCase();
  //   /*conseguir los datos del usuario identificadp*/
  //   this._userService.signup(this.user).subscribe(
  //     (response: any) => {
  //       let identity = response.user;
  //       this.identity = identity;

  //       if(!this.identity._id){
  //         alert('El usuario no está identificado');
  //       }else{
  //         /*creamos la sesion en local storage*/
  //       localStorage.setItem('identity', JSON.stringify(identity));

  //         /*Conseguir el token para enviarselo a cada petición http*/
  //         this._userService.signup(this.user, 'true').subscribe(            
  //           (response: any) => {
  //             let token = response.token;
  //             this.token = token;
  //             if(!this.token){
  //               alert('El token no se ha generado');
  //             }else{                
  //               /*creamos la sesion en local storage para tener el token disponible*/
  //             localStorage.setItem('token', token);               
  //             this.user = new User(
  //               response.user._id,
  //               response.user.name,
  //               response.user.surname,
  //               response.user.email,
  //               "","ROLE_USER","");
  //             this._router.navigate(['/pronosticos/']);        
              

  //             }
  //           },
  //           error => {            
  //             var errorMessage = <any>error;
  //             if(errorMessage!=null){         
  //               this.errorMessage = 'El usuario no ha podido loggearse';
  //               setTimeout(() => {
  //                 this.errorMessage = null;
  //               }, 5000); 
  //             }
  //           }
  //         );
  //       }
  //     },
  //     error => {
  //       var errorMessage = <any>error;
  //       if(errorMessage!=null){         
  //         this.errorMessage = 'El usuario no ha podido loggearse';  
  //         setTimeout(() => {
  //           this.errorMessage = null;
  //         }, 5000);        
  //       }
  //     }
  //   );
  // }  

  // /*método para registrar un nueuvo usuario, se invoca cuando se envío el formulartio d registro*/
  // public register(){
  //    this._userService.saveUser(this.newUser).subscribe(
  //     (response: any)=>{
  //     let user = response.user;
  //     this.newUser = user;
  //     if(!user._id){
  //       alert('Error al registrarse');
  //       this.alertRegister = 'Error al registrar el usuario';
  //     }else{
  //       this.alertRegister = 'El registro se ha realizado correctamente, identifícate con ' + this.newUser.email;
  //       this.newUser = new User("","","","","","ROLE_USER","");
  //     }
  //     },
  //     error=>{        
  //       var errorMessage = <any>error;
  //       if(errorMessage!=null){         
  //         this.alertRegister = 'Error al registrar el usuario';          
  //       }

  //     });
  // }
}
