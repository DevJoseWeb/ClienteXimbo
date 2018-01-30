import { Component, OnInit } from '@angular/core';
import {PessoasService} from 'app/services/pessoas.service';
import {Pessoas} from 'app/model/pessoas';
declare var $: any;
@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css']
})
export class TypographyComponent implements OnInit {

 
  public pessoas: Pessoas[] = [];

  constructor(private pessoasService: PessoasService) { }
  showNotification(from, align){
    const type = ['','info','success','warning','danger'];

    const color = Math.floor((Math.random() * 4) + 1);

    $.notify({
        icon: 'notifications',
        message: 'ESCOLHA CERTA...</b> PLAY.'

    },{
        type: type[color],
        timer: 4000,
        placement: {
            from: from,
            align: align
        }
    });
}
  ngOnInit() {
    this.pessoasService.getPessoas()
    .subscribe(data =>
     this.pessoas = data);
  }

}
