import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'app/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class RoleAdminGuard implements  CanActivate {
  
  private identity: any;
  constructor(
    public userService: UserService    
  ){
    this.identity = userService.getIdentity();
  }
  canActivate(){
    console.log(this.identity.role);
    if(this.identity.role == 'ROLE_ADMIN'){
      return true;
    }
    else{      
      console.log('USUARIO SIN PERMISO');      
      return false;
    }
  }
}

export class LoginGuard implements  CanActivate {
  
  private identity: any;
  constructor(
    public userService: UserService    
  ){
    this.identity = userService.identity;
  }
  canActivate(){        
    if(this.userService.getIdentity() && this.userService.getIdentity() != undefined){
      return true;
    }
    else{      
      console.log('USUARIO SIN PERMISO');      
      return false;
    }
  }
}