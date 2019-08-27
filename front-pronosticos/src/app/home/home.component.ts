import { Component, OnInit } from '@angular/core';
import { User } from 'app/models/user';
import { UserService } from 'app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public user: User;
  public identity: any;
  public errorMessage;
  public alertRegister;
  public token: any;
  constructor(
    private _userService: UserService,
    private _router: Router
  ) {
    this.identity = _userService.getIdentity();
    this.token = _userService.getToken();
    this.user = new User("", "", "", "", "", "ROLE_USER", "");
  }

  ngOnInit() {
    if(this._userService.identity && this._userService.identity!=undefined)
      this._router.navigate(['/pronosticos']);
  }

  /*FUncion invocada cuando se pulsa el botón de entrar en LOGIN*/
  public onSubmit() {
    this.user.email = this.user.email.toLowerCase();
    /*conseguir los datos del usuario identificadp*/
    this._userService.signup(this.user).subscribe(
      (response: any) => {
        let identity = response.user;
        this.identity = identity;
        this._userService.identity = identity;

        if (!this.identity || this.identity == undefined || !this.identity._id) {
          alert('El usuario no está identificado');
        } else {
          /*creamos la sesion en local storage*/
          localStorage.setItem('identity', JSON.stringify(identity));

          /*Conseguir el token para enviarselo a cada petición http*/
          this._userService.signup(this.user, 'true').subscribe(
            (response: any) => {
              let token = response.token;
              this.token = token;
              if (!this.token) {
                alert('El token no se ha generado');
              } else {
                /*creamos la sesion en local storage para tener el token disponible*/
                localStorage.setItem('token', token);
                this.user = new User("", "", "", "", "", "ROLE_USER", "");
                this._router.navigate(['/pronosticos/']);

              }
            },
            error => {
              var errorMessage = <any>error;
              if (errorMessage != null) {
                this.errorMessage = 'El usuario no ha podido loggearse';
              }
            }
          );
        }
      },
      error => {
        var errorMessage = <any>error;
        if (errorMessage != null) {
          this.errorMessage = 'El usuario no ha podido loggearse';
        }
      }
    );
  }

}
