import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class UserService{
	public url:string;
	public identity:string;
	public token:string;

	constructor(private _http :HttpClient){
		this.url = 'https://mywinningbet.cleverapps.io/api/';
	}

	/*funci´´on que hace el login en la aplicación*/
	signup(user_to_login, gethash = null){
		if(gethash !=null){
			user_to_login.gethash = gethash;			
		}
		let json = JSON.stringify(user_to_login);
		let params = json;
		let headers = new HttpHeaders().set('Content-Type', 'application/json');
		
		return this._http.post(this.url+'login', params,{headers});
				// map(res => res.json());
	}

	/*función que guarda un nueuvo usuario en la bbdd*/
	saveUser(user_to_register){
		let params = JSON.stringify(user_to_register);		
		let headers = new HttpHeaders().set('Content-Type', 'application/json');
		return this._http.post(this.url+'register', params,{headers});
				// map(res => res.json());
	}

	/*función que actualiza usuario en la bbdd*/
	updateUser(user_to_update){
		let params = JSON.stringify(user_to_update);		

		// let headers = new Headers({'Content-Type':'application/json','Authorization' : this.getToken()});
		let headers = new HttpHeaders().set('Content-Type', 'application/json');
		return this._http.put(this.url+'update-user/' + user_to_update._id, params, {headers : headers});
				// map(res => res.json());
	}	

	/*función que devuelve el identity (datos de usuario logeado)*/
	getIdentity(){
		let identity = JSON.parse(localStorage.getItem('identity'));		
		if(identity != "undefined"){
			this.identity = identity;
		}else{
			this.identity = null;
		}
		return this.identity;
	}

	/*función que devuelve el token del usuario loggeado)*/
	getToken(){
		let token = localStorage.getItem('token');		
		if(token != "undefined"){
			this.token = token;
		}else{
			this.token = 'null';
		}
		return this.token;
	}

	enviarMail(mail){
		let params = JSON.stringify(mail);		
		let headers = new Headers({'Content-Type':'application/json','Authorization' : this.getToken()});
		return this._http.post(this.url+'sendEmail', params);
				// map(res => res.json());
				
	}
}