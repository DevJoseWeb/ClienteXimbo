import { Injectable } from '@angular/core';
import { RequestOptions, Headers, Http, Response, URLSearchParams, Jsonp  } from '@angular/http';
import { Pessoas } from 'app/model/pessoas';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import 'rxjs/Rx';

// Observable operators
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { HttpUtilServiceMongoDB } from 'app/util/HttpUtilServiceMongoDB';

@Injectable()
export class PessoasService {
  header: Headers;
  opts: RequestOptions;

  private pessoas: any[];
   private path = 'pessoas';

 constructor(private http: Http, private jsonp: Jsonp, private httpUtil: HttpUtilServiceMongoDB) {

  this.header = new Headers();
    //this.header.append('Content-Type', 'application/x-www-form-urlencoded');
    this.header.append('Content-Type', 'application/json');
    //this.header.append('Authorization', 'Bearer ' + this._token.value);

    // Populate Request Options
    this.opts = new RequestOptions();
    this.opts.headers = this.header;

  }

  getPessoas() : Observable<any> {
    return this.http.get('http://localhost:3000/pessoas/')
    .map(res => res.json().pessoas)
    .catch(this.httpUtil.processarErros);
  }
  

 getPessoasid(idpessoa) {
    return this.http.get(this.getPessoaUrl(idpessoa)).map(res => res.json());
 }
//3
addPessoas(pessoas) {
     return this.http.post(this.httpUtil.urlUserPost(), JSON.stringify(pessoas)).map(res => res.json());
   }
//4
 updatePessoas(pessoas) {
    return this.http.put(this.getPessoaUrl(pessoas.idpessoa), JSON.stringify(pessoas)).map(res => res.json());
  }
 //5 
 deletePessoa(idpessoa) {
    return this.http.delete(this.getPessoaUrl(idpessoa)).map(res => res.json());
  }
  //6
visualizarLeitor(idpessoa) {
    return this.http.get(this.getPessoaUrl(idpessoa)).map(res => res.json());
  }

 buscarPorId(idpessoa: number): Observable<Pessoas> {
 		return this.http.get(this.httpUtil.urlbuscarPorId(idpessoa),
 						this.httpUtil.headers())
 	                .map(this.httpUtil.extrairDados)
 	                .catch(this.httpUtil.processarErros);
 	}
   private getPessoaUrl(idpessoa) {
    return this.httpUtil.urllistarPessoa + '/' + idpessoa;
  }
}
