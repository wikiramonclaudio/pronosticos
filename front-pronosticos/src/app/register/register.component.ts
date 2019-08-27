import { Component, OnInit } from '@angular/core';
import { User } from 'app/models/user';
import { ActivatedRoute, Router } from '@angular/router';
import { PronosticoService } from 'app/services/pronostico.service';
import { UserService } from 'app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../home/home.component.css']
})
export class RegisterComponent implements OnInit {
  public identity;
  public token;
  public newUser: User;
  alertRegister: string;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _pronosticoService: PronosticoService,
    private _userService: UserService,
  ) {
    this.identity = _userService.getIdentity();
    this.token = _userService.getToken();
    this.newUser = new User("", "", "", "", "", "ROLE_USER", "");
  }

  ngOnInit() {
  }

  /*método para registrar un nueuvo usuario, se invoca cuando se envío el formulartio d registro*/
  public register() {
    this._userService.saveUser(this.newUser).subscribe(
      (response: any) => {
        let user = response.user;
        this.newUser = user;
        if (!user._id) {
          alert('Error al registrarse');
          this.alertRegister = 'Error al registrar el usuario';
        } else {
          this.alertRegister = 'El registro se ha realizado correctamente, identifícate con ' + this.newUser.email;
          this._router.navigate(['/home']);
          // this.newUser = new User("", "", "", "", "", "ROLE_USER", "");
        }
      },
      error => {
        var errorMessage = <any>error;
        if (errorMessage != null) {
           this.alertRegister = 'Error al registrar el usuario';
        }

      });
  }

}
