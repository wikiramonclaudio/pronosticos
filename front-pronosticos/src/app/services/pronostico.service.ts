import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Pronostico} from '../models/pronostico';

@Injectable()
export class PronosticoService{
	public url:string;

	constructor(private _http :HttpClient){
		this.url = 'http://mywinningbet.cleverapps.io/api/';
	}

	/*funcion para añadir un nueuvo pronostico a la BBDD*/
	addPronostico(token, pronostico:Pronostico){
		var params = JSON.stringify(pronostico);
		let headers = new HttpHeaders().set('Content-Type', 'application/json');
		return this._http.post(this.url + 'pronostico', params, {headers});
						// .map(res => res.json());
	}

	// /*función que devuelve los aritstas en la base de datos*/
	getPronosticos(token, from: number = 0, sport:string = ''){
		return this._http.get(this.url + 'pronosticos?from='+from + '&sport='+sport);
						// .map(res => res.json());
	}

	getLastPronosticos(token){
		return this._http.get(this.url + 'last-pronosticos');
						// .map(res => res.json());
	}	

	// /*función que devuelve un pronostico de la base de datos*/
	getPronostico(token, id:string){
		return this._http.get(this.url + 'pronostico' + id);
						// .map(res => res.json());
	}

	// /*Funciópn para actuaizar un pronostico*/
	editPronostico(token, id:string, pronostico: Pronostico){
		var params = JSON.stringify(pronostico);
		let headers = new HttpHeaders().set('Content-Type', 'application/json');
		return this._http.put(this.url + 'pronostico/' + id, params, {headers});
						// .map(res => res.json());
	}

	// /*función que elimina un pronostico de la base de datos*/
	deletePronostico(token, id:string){
		return this._http.delete(this.url + 'pronostico/' + id);
						// .map(res => res.json());
	}

	getStats(){
		return this._http.get(this.url + 'stats');
	}

	getYield(sport: string = ''){
		return this._http.get(this.url + 'yield');
	}


}