import { Injectable } from '@angular/core';
import { Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Routes, RouterModule } from '@angular/router';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class HttpUtilServiceMongoDB {


	public API_URL: string = 'http://localhost:3000/agendas/';
	public urllistarPessoa = 'http://localhost:3000/pessoas/';
	
	public API_URLid: string = 'http://localhost:3000/pessoas/pedidos';
	

	public API_URLp: string = 'http://localhost:3000/produtos/';
	public API_URLpid: string = 'http://localhost:3000/produtos/';

	public urllistar = 'http://localhost:3000/users';
	public urlpost = 'http://localhost:3000/users/cadastrar/';
	public urlput: string = 'http://localhost:3000/users/editar/';
	public urlbuscarid: string = 'http://localhost:3000/users';

	public urllistarPedidos = 'http://localhost:3000/pedidos/todosPedidos/';

  public urlVwPedidosNome = 'http://localhost:3000/vwpedidos/buscar/';
  public urlView = 'http://localhost:3000/vwpedidos/';

  urlViewPedNome () {
    return this.urlVwPedidosNome;
  }
	urlUserListar() {
		return this.urllistar;
	}
	urlPessoaListarPessoa() {
		return this.urllistarPessoa;
	}
	urlPedidosListarPedidos() {
		return this.urllistarPedidos;
	}
	urlListarTodos() {
		return this.urllistar;
	}
	url(path: string) {
		return this.urlpost;
	}

	// private API_URL: string = 'http://localhost:3000/api/';
	// url(path: string) {
	// 	return this.API_URL + path;
	// }

	urlUserPut(path: string) {
		return this.urlput + path;
}

	urlUserListarid() {
		return this.urllistar;
	}

	urlUserBuscarId(path: string) {
		return this.urlbuscarid + path;
	}
	urlUserPost() {
		return this.urlpost;
	}
	urlListar() {
		return this.API_URL;
	}
	urlbuscarPorId(idpessoa: any) {
		return this.API_URLid + idpessoa;
	}
	urlListarp() {
		return this.API_URLp;
	}

	/*
	->header("Access-Control-Expose-Headers", "Access-Control-*")
	->header("Access-Control-Allow-Headers", "Access-Control-*, Origin, X-Requested-With, Content-Type, Accept")
	->header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, HEAD')
	->header('Access-Control-Allow-Origin', '*')
	->header('Allow', 'GET, POST, PUT, DELETE, OPTIONS, HEAD');*/

	 headers() {
		let headersParams = {
	    
	    'Content-Type': 'application/json;charset=UTF-8', 
		'Access-Control-Allow-Headers':  'Access-Control-*, Origin, X-Requested-With, Content-Type, Accept',
		'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS, HEAD',
		'Access-Control-Allow-Origin' : '*',
		'Allow' : 'GET, POST, PUT, DELETE, OPTIONS, HEAD'

	};
		

	/*if (localStorage['token']) {
			headersParams['Authorization'] = localStorage['token'];
		}*/
		let headers = new Headers(headersParams);
    	let options = new RequestOptions({ headers: headers });
    	return options;
	}

	extrairDados(response: Response) {
		let data = response.json();
		return data || {};
	}

	processarErros(erro: any) {
		return Observable.throw(alert('Erro acessando servidor remoto, Serviço HTTP'));
	}
	processarErrosUserAdd(erro: any) {
		return Observable.throw(alert('Erro acessando servidor remoto, Serviço de Cadastro de Usuário fora do AR'));
	}
	processarErrosUserUpdate(erro: any) {
		return Observable.throw(alert('Erro acessando servidor remoto, Serviço de Atualização de Usuário fora do AR'));
	}
	processarErrosUserBuscarId(erro: any) {
		return Observable.throw(alert('Erro acessando servidor remoto, Serviço de Busca de Usuário fora do AR'));
	}
	processarErrosPessoaBuscarId(erro: any) {
		return Observable.throw(alert('Erro acessando servidor remoto, Serviço de Busca de Cliente fora do AR'));
	}
	processarErrosCpf(erro: any) {
		return Observable.throw(alert('Erro acessando servidor remoto, CPF já cadastrado'));
	}
}
