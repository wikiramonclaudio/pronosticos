import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { Pronostico } from './models/pronostico';
import { PronosticoService } from './services/pronostico.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [
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
  public pronosticos: any[];


  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _pronosticoService: PronosticoService,
    public _userService: UserService,
  ) {
    this.identity = _userService.getIdentity();
    this.token = _userService.getToken();
  }

  ngOnInit() {

  }

  /*método que cierra la sesión*/
  logout() {
    localStorage.removeItem('identity');
    localStorage.removeItem('token');
    this.identity = null;
    this.token = null;
    /*vació el localStorage para cerrar la sesión del usuario*/
    localStorage.clear();
    this._router.navigate(['home']);

  }

}
