import { Component, OnInit } from '@angular/core';
import {AgendaService} from 'app/services/agenda.service';
import {Agenda} from 'app/model/agenda';
declare var $: any;
@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {

    public agenda: Agenda[] = [];

    constructor(private agendaService: AgendaService) { }
 
  showNotification(from, align){
      const type = ['','info','success','warning','danger'];

      const color = Math.floor((Math.random() * 4) + 1);

      $.notify({
          icon: 'agenda',
          message: 'Teste</b> Teste.'

      },{
          type: type[color],
          timer: 4000,
          placement: {
              from: from,
              align: align
          }
      });
  }
  showNotification2(from, align){
    const type = ['','info','success','warning','danger'];

    const color = Math.floor((Math.random() * 4) + 1);

    $.notify({
        icon: 'agenda',
        message: 'Adicionado</b> Cadastrado mais uma repetição.'

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
    //this.pessoasService.getPessoas().subscribe(data => this.pessoas = data);
    this.agendaService.getAgenda().subscribe(data => this.agenda = data);
   }
}
