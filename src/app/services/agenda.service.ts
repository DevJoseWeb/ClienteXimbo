import { Injectable } from '@angular/core';
import { RequestOptions, Headers, Http, Response, URLSearchParams, Jsonp  } from '@angular/http';
import { Agenda } from 'app/model/agenda';
import { Observable } from 'rxjs/Rx';
import { Routes, RouterModule } from '@angular/router';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { HttpUtilServiceMongoDB } from 'app/util/HttpUtilServiceMongoDB';

@Injectable()
export class AgendaService {

   private agenda: any[];
   private path = 'agenda';

 constructor(private http: Http, private jsonp: Jsonp, private httpUtil: HttpUtilServiceMongoDB) { }

 getAgenda() {
   // return this.http.get(this.httpUtil.urlListar()).map(res => res.json())
   return this.http.get('http://localhost:3000/agendas/').map(res => res.json())
    .catch(this.httpUtil.processarErros);
  }


 getAgendaid(idpessoa) {
    return this.http.get(this.getPessoaUrl(idpessoa)).map(res => res.json());
 }
 
addAgenda(agenda) {
     return this.http.post(this.httpUtil.urlUserPost(), JSON.stringify(agenda)).map(res => res.json());
   }
 
 updateAgenda(agenda) {
    return this.http.put(this.getPessoaUrl(agenda.idpessoa), JSON.stringify(agenda)).map(res => res.json());
  }
 
 deletePessoa(idpessoa) {
    return this.http.delete(this.getPessoaUrl(idpessoa)).map(res => res.json());
  }
 
visualizarLeitor(idpessoa) {
    return this.http.get(this.getPessoaUrl(idpessoa)).map(res => res.json());
  }

 buscarPorId(idpessoa: number): Observable<Agenda> {
 		return this.http.get(this.httpUtil.urlbuscarPorId(idpessoa),
 						this.httpUtil.headers())
 	                .map(this.httpUtil.extrairDados)
 	                .catch(this.httpUtil.processarErros);
 	}
   private getPessoaUrl(idpessoa) {
    return this.httpUtil.urllistarPessoa + '/' + idpessoa;
  }
}
